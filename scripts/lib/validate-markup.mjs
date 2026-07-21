/**
 * Markup validator: finds Nucleus-like class names (prefix `n-`) in HTML/JSX/
 * TSX/Vue/Svelte files that are NOT part of the framework, and suggests close
 * matches. Dynamic class expressions are ignored — only static string tokens
 * are checked, so unrelated project classes are never reported.
 */

const PREFIX = "n-";

// class / className / :class / v-bind:class / [ngClass] = "..." | '...' | `...`
const ATTR_RE =
  /(?:^|[\s{(,])(?:class|className|:class|v-bind:class|\[ngClass\])\s*=\s*(?:"([^"]*)"|'([^']*)'|\{?\s*`([^`]*)`\s*\}?)/g;

const STATIC_TOKEN_RE = /^n-[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Levenshtein distance (small strings only). */
export function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  if (!m) return n;
  if (!n) return m;
  const row = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i += 1) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= n; j += 1) {
      const tmp = row[j];
      row[j] = Math.min(
        row[j] + 1,
        row[j - 1] + 1,
        prev + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      prev = tmp;
    }
  }
  return row[n];
}

/** Best valid suggestion for an unknown class, or null if nothing is close. */
export function suggest(name, known) {
  let best = null;
  let bestScore = Infinity;
  for (const candidate of known) {
    const d = levenshtein(name, candidate);
    if (d < bestScore || (d === bestScore && candidate.length < (best?.length ?? Infinity))) {
      bestScore = d;
      best = candidate;
    }
  }
  // Only suggest when reasonably close (a couple of edits).
  const threshold = Math.max(2, Math.floor(name.length / 4));
  return bestScore <= threshold ? best : null;
}

function lineOf(text, index) {
  let line = 1;
  for (let i = 0; i < index && i < text.length; i += 1) {
    if (text[i] === "\n") line += 1;
  }
  return line;
}

function staticClassValues(content) {
  const values = [];
  for (const match of content.matchAll(ATTR_RE)) {
    const value = match[1] ?? match[2] ?? match[3] ?? "";
    const attrIndex = match.index + match[0].indexOf(value);
    const tokens = value
      .split(/\s+/)
      .map((token) => token.trim())
      .filter((token) => token && !/[${}()[\]<>?:]/.test(token) && /^(?:n-[a-z0-9]+(?:-[a-z0-9]+)*|active)$/.test(token));
    values.push({ tokens, line: lineOf(content, attrIndex) });
  }
  return values;
}

/**
 * Scan file content and return findings for unknown Nucleus classes.
 * @returns {Array<{className:string, line:number, suggestion:string|null}>}
 */
export function validateContent(content, known) {
  const findings = [];
  for (const value of staticClassValues(content)) {
    for (const token of value.tokens) {
      if (!token || !token.startsWith(PREFIX)) continue;
      if (!STATIC_TOKEN_RE.test(token)) continue;
      if (known.has(token)) continue;
      findings.push({
        className: token,
        line: value.line,
        suggestion: suggest(token, known),
      });
    }
  }
  return findings;
}

/**
 * Rich validation for the CLI. Unknown classes are errors; deprecated aliases
 * and component-scoped legacy `.active` usage are warnings.
 */
export function validateUsage(content, manifest) {
  const entries = new Map(manifest.classes.map((entry) => [entry.name, entry]));
  const known = new Set(entries.keys());
  const diagnostics = validateContent(content, known).map((finding) => ({
    ...finding,
    level: "error",
    code: "unknown-class",
    message: `Unknown Nucleus class: ${finding.className}`,
  }));

  for (const value of staticClassValues(content)) {
    for (const token of value.tokens) {
      const entry = entries.get(token);
      if (!entry?.deprecated) continue;
      diagnostics.push({
        className: token,
        line: value.line,
        level: "warning",
        code: "deprecated-class",
        replacement: entry.replacement || entry.aliasOf || null,
        message: `Deprecated Nucleus class: ${token}`,
      });
    }

    if (value.tokens.includes("active")) {
      const legacy = manifest.stateConvention?.legacySelectors?.find((item) => item.selector === ".active");
      const component = legacy?.scope?.find((name) => value.tokens.includes(name));
      if (component) {
        diagnostics.push({
          className: "active",
          line: value.line,
          level: "warning",
          code: "legacy-state-selector",
          replacement: legacy.replacement,
          message: `Deprecated state selector: active on ${component}`,
        });
      }
    }
  }

  return diagnostics;
}

export function knownFromManifest(manifest) {
  return new Set(manifest.classes.map((c) => (typeof c === "string" ? c : c.name)));
}

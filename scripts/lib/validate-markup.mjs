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

/**
 * Scan file content and return findings for unknown Nucleus classes.
 * @returns {Array<{className:string, line:number, suggestion:string|null}>}
 */
export function validateContent(content, known) {
  const findings = [];
  for (const match of content.matchAll(ATTR_RE)) {
    const value = match[1] ?? match[2] ?? match[3] ?? "";
    // Skip values that are clearly dynamic (interpolation / expressions).
    const attrIndex = match.index + match[0].indexOf(value);
    for (const raw of value.split(/\s+/)) {
      const token = raw.trim();
      if (!token || !token.startsWith(PREFIX)) continue;
      // Ignore anything with template/expression syntax.
      if (/[${}()[\]<>?:]/.test(token)) continue;
      if (!STATIC_TOKEN_RE.test(token)) continue;
      if (known.has(token)) continue;
      findings.push({
        className: token,
        line: lineOf(content, attrIndex),
        suggestion: suggest(token, known),
      });
    }
  }
  return findings;
}

export function knownFromManifest(manifest) {
  return new Set(manifest.classes.map((c) => (typeof c === "string" ? c : c.name)));
}

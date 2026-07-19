// Sentinel delimiter: an actual NUL byte, produced without embedding one in
// source. NUL never appears in CSS and is matched by neither `\s` nor the
// structural token set, so masked-span markers survive whitespace collapsing.
const NUL = String.fromCharCode(0);

/**
 * Zero-dependency CSS minifier.
 *
 * `url(...)` payloads and quoted strings are masked before whitespace/comment
 * processing so that `content: "..."`, `url("data:...")`, and other value
 * strings are never corrupted. Only whitespace around structural tokens
 * (`{ } : ; , >`) is collapsed — spaces around `+`, `~`, `-`, and `*` are
 * preserved so `calc(100% + 0.5rem)` and sibling combinators stay valid.
 */
export function minifyCss(css) {
  const spans = [];
  const mask = (m) => {
    spans.push(m);
    return `${NUL}${spans.length - 1}${NUL}`;
  };

  // 1. Mask url() payloads and quoted strings (url first, so inner quotes are
  //    captured as part of the url token rather than masked separately).
  let out = css.replace(
    /url\((?:[^)\\]|\\.)*\)|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g,
    mask,
  );

  // 2. Strip comments.
  out = out.replace(/\/\*[\s\S]*?\*\//g, "");

  // 3. Collapse all runs of whitespace to a single space.
  out = out.replace(/\s+/g, " ");

  // 4. Remove whitespace around structural tokens (safe set only).
  out = out.replace(/\s*([{}:;,>])\s*/g, "$1");

  // 5. Drop the final semicolon in each block and remove empty rules.
  out = out.replace(/;}/g, "}");
  out = out.replace(/[^{}]+\{\}/g, "");
  out = out.trim();

  // 6. Restore masked spans.
  out = out.replace(new RegExp(`${NUL}(\\d+)${NUL}`, "g"), (_, i) => spans[Number(i)]);

  return out;
}

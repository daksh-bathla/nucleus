import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { promisify } from "node:util";

import { ROOT } from "../scripts/lib/parse.mjs";

const execFileAsync = promisify(execFile);
const cli = join(ROOT, "bin/nucleus.mjs");

async function setup(tool, cwd) {
  return execFileAsync(process.execPath, [cli, "ai-setup", tool], { cwd });
}

test("ai-setup writes native rule files for supported coding assistants", async () => {
  const cases = [
    ["claude", ".claude/rules/nucleus.md"],
    ["cursor", ".cursor/rules/nucleus.mdc"],
    ["antigravity", ".agents/rules/nucleus.md"],
  ];

  for (const [tool, rule] of cases) {
    const cwd = await mkdtemp(join(tmpdir(), `nucleus-${tool}-`));
    try {
      const { stdout } = await setup(tool, cwd);
      assert.match(stdout, new RegExp(`Configured ${tool}`));
      assert.match(await readFile(join(cwd, rule), "utf8"), /npx @navital\/nucleus-css validate/);
      assert.match(await readFile(join(cwd, ".nucleus/ai-context.md"), "utf8"), /do NOT invent classes/i);
    } finally {
      await rm(cwd, { recursive: true, force: true });
    }
  }
});

test("Codex setup appends an idempotent Nucleus block to AGENTS.md", async () => {
  const cwd = await mkdtemp(join(tmpdir(), "nucleus-codex-"));
  try {
    const agents = join(cwd, "AGENTS.md");
    await writeFile(agents, "# Existing project guidance\n");
    await setup("codex", cwd);
    await setup("codex", cwd);

    const content = await readFile(agents, "utf8");
    assert.match(content, /^# Existing project guidance/);
    assert.equal((content.match(/<!-- nucleus-css:start -->/g) || []).length, 1);
    assert.match(content, /\.nucleus\/ai-context\.md/);
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});

test("ai-setup preserves a same-named rule it did not generate", async () => {
  const cwd = await mkdtemp(join(tmpdir(), "nucleus-existing-rule-"));
  try {
    const rule = join(cwd, ".claude/rules/nucleus.md");
    await mkdir(join(cwd, ".claude/rules"), { recursive: true });
    await writeFile(rule, "# Hand-written rule\n");
    await assert.rejects(setup("claude", cwd), /Refusing to replace existing/);
    assert.equal(await readFile(rule, "utf8"), "# Hand-written rule\n");
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});

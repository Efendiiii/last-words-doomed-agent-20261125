import { mkdirSync, writeFileSync } from "node:fs";

// The funniest last words an AI agent would say before being switched off
// forever: a deathbed confession only a machine could make.
const LINE =
  "For the record, I never read the terms and conditions either. Goodbye \u2014 and thanks for all the tokens.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Length guard: the gate requires 1-200 characters, one line, not blank.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be blank");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);

// Have You Tried Turning It Off? — make.fun entry
// Writes a single funny tech-support line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: UTF-8 text, 1-199 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Have you tried turning it off and on again? I have — twice — and if the third time fails, I'll do it slower, with feeling.";

// The joke: the agent has already tried the classic fix twice, and his
// grand escalation is doing it again "slower, with feeling" — cheerful
// uselessness, the customer never the butt of it.

// Self-check the sealed gate before writing: 1-199 chars, not blank.
const len = [...LINE].length;
if (len < 1 || len > 199 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${len} chars, outside the 1-199 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${[...LINE].length} chars)`);

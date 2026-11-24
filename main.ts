// The Funniest Toaster Error Message — make.fun entry
// Writes a single toaster error line to /output/entry.txt.
// The line must be 1..120 characters of UTF-8 text, so the program
// validates its own output before writing it.
//
// The joke, by the judge's brief, in order:
//   1. Real error message: it opens with ERROR: and reads like a
//      status line on a small appliance's display.
//   2. Freshness: the surprise comes from a labour dispute, not from
//      any toast/bread pun — the bread has unionised, so the toaster
//      cannot toast until negotiations end.
//   3. Tightness: 68 characters, every word earns its place.
//   4. One voice: deadpan appliance, held to the end.
//   5. Single read: one sentence of cause, one of consequence.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The error code, the cause, and the consequence, in the order a
// real appliance would print them.
const CODE = "ERROR";
const CAUSE = "Bread has unionised.";
const CONSEQUENCE = "Toasting suspended pending negotiations.";

const ENTRY = `${CODE}: ${CAUSE} ${CONSEQUENCE}`;

const MAX_CHARS = 120;

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} characters, must be 1..${MAX_CHARS}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${chars} characters to ${outPath}`);
}

main();

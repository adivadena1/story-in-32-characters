// Tell a Whole Story in 32 Characters — make.fun bounty entry.
// Writes one Wi-Fi network name to /output/entry.txt.
// Runs on Node 22 (TypeScript as-is), deterministic, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "He Died. His Autopay Didn't.";

const length = [...LINE].length;
if (length < 1 || length > 32) {
  throw new Error(`entry must be 1-32 characters, got ${length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

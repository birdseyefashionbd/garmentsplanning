import fs from "fs";

const content = fs.readFileSync("./src/components/planning/PlanBoardView.tsx", "utf8");
const lines = content.split("\n");
lines.forEach((line, idx) => {
  // Look for any bracket access obj[...] where obj is an identifier
  const matches = line.match(/([a-zA-Z0-9_$]+)\[([^\]]+)\]/g);
  if (matches) {
    matches.forEach(m => {
      // filter out common safe ones like Array.from or useState or type generics
      if (!m.startsWith("Array[") && !m.startsWith("Set[")) {
        console.log(`L${idx+1}: ${m}  --->  ${line.trim()}`);
      }
    });
  }
});

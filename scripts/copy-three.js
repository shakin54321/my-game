const fs = require("fs");
const path = require("path");
const threeEntry = require.resolve("three");
const source = path.join(path.dirname(threeEntry), "three.min.js");
const target = path.join(process.cwd(), "public", "three.min.js");
if (!fs.existsSync(source)) throw new Error("Three.js browser build not found: " + source);
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.copyFileSync(source, target);
console.log("Copied " + source + " -> " + target);

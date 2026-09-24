const fs = require("fs");
const path = require("path");
const source = require.resolve("three/build/three.min.js");
const target = path.join(process.cwd(), "public", "three.min.js");
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.copyFileSync(source, target);
console.log("Copied Three.js to public/three.min.js");

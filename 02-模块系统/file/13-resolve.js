
const path = require("path")


let p = path.resolve("a/b","/work","d");
let q = path.join("a/b","/work","d");

console.log(p);
console.log(q);
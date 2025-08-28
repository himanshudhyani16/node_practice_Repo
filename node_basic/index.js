// const math = require("./math");
const { add, sub } = require("./math");

// if you declare like require("./math "); , require("./http"); then it find a that file in current dir.
// or if you declare like require("http"); , require("fs"); then it find a node dir or external library.
// difference is ./ 

// console.log(math.add(2, 6));
// console.log(math.sub(2, 6));
console.log(add(2, 6));
console.log(sub(2, 6));

console.log("hello");

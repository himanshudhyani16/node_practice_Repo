//2days

//file handling : file operation
// fs: file sysytem

const fs = require("fs");
const os = require("os");
// // Sync...
// fs.writeFileSync("./test.txt","Hello world");

// // Async...
// fs.writeFile("./test.txt", "Hello world Async", (error) => {
//   error && console.log("error: ", error);
// });

// read file
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// // Async read file
// fs.readFile("./contact.txt", "utf-8", (error, result) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });

// ## Sync :- return a value ;
// ## Async :- don't return value it give callback fun where you get a error or result ;

fs.appendFileSync("./test.txt", `hello ${Date.now()} \n`);

// // Copy file data from one file to another
// fs.cpSync("./test.txt", "./copy.txt");

// // delete file
// fs.unlinkSync("./copy.txt")

// const stats = fs.statSync("./test.txt");
// console.log(stats);

// fs.mkdirSync("mydoc");
// fs.mkdirSync("mydoc/a/b", { recursive: true });

// console.log(os.cpus().length);




// // ####  How to node js work ?
// ## Architecture

//clint -> request -> server( event queue [FIFO]-> event loop -> Blocking (Sync) / non - Blocking operations (ASYNC ))
// if Blocking operations -> i need a thread/worker (assign a worker and make him work ) ->  thread pool( as workers, it depend on how many core(thread/worker) you have in your CPU) -> retrun result 
// if Non blocking operation -> return result 

// always use non blockint operations for better performations 
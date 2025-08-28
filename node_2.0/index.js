//Building HTTP Server in NodeJS
const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const setLog = `${Date.now()}, Method : ${req.method}, ${req.url},  New Request Received \n`;
  const myUrl = url.parse(req.url, true);
  console.log("MyURl", myUrl);
  fs.appendFile("log.txt", setLog, (error, result) => {
    if (!error) {
      // switch (req.url) {
      switch (myUrl.pathname) {
        case "/":
          res.end("HOME PAGE");
          break;
        case "/about":
          const userName = myUrl.query.myname;
          res.end(`Hi, ${userName}`);
          break;
        case "/search":
          const search = myUrl.query.search_query;
          res.end(`Here are your results for ${search}` );
          break;
        default:
          res.end("404 NOT FOUND");
      }
    } else {
      console.log(error);
    }
  });
});

server.listen(8000, () => console.log("Server Working..."));

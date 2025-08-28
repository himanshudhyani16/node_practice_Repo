const express = require("express");
const http = require("http");
const app = express();

app.get("/", (req, res) => {
  res.end("HOme PAge");
});
app.get("/about", (req, res) => {
  const { name } = req.query;
  res.end(`About page : Hi ${name}`);
});

app.listen(8000, () => console.log("Server Working..."));

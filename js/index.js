const fs = require("fs");
const http = require("http");
const url = require("url");

const home = fs.readFileSync("../home.html", "utf-8");
const home_card = fs.readFileSync("../home.html", "utf-8");

const replaceFunc = require("./replaceFunc.js");
const product = fs.readFileSync("../data/product.json", "utf-8");
let productObj = JSON.parse(product);

const server = http.createServer((request, response) => {
  if (request.url == "" || request.url === "/home") {
  }
});

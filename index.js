const fs = require("fs");
const http = require("http");
const url = require("url");
const css = require("./css/style.css");

const home = fs.readFileSync("./home.html", "utf-8");
const box = fs.readFileSync("./box.html", "utf-8");

const replaceFunc = require("./js/replaceFunc.js");
const product = fs.readFileSync("./data/product.json", "utf-8");
let productObj = JSON.parse(product);

const server = http.createServer((request, response) => {
  if (request.url == "/" || request.url === "/home") {
    response.writeHead(200, {
      "content-type": "text/plain",
    });
    let allBox = [];
    for (let item of productObj) {
      allBox.push(replaceFunc(box, item));
    }
    allBox = allBox.join("");
    home.replace("{BoxHtml}", allBox);

    response.writeHead(200, {
      "content-type": "text/html",
    });

    response.end(home);
  }
});

server.listen("8000", "127.0.0.1");

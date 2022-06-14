const http = require("http");
require('dotenv').config();
const customers = require('./customers');
const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
    // console.log("methods:", req.method);
    console.log(customers);
    // console.log(process.env);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

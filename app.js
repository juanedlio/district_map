const http = require('http');
const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile('/index.html');
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

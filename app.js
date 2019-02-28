const http = require('http');
const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();

// const hostname = '127.0.0.1';
const port = process.env.PORT;

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile('/index.html');
})

app.listen(process.env.PORT || 5000, console.log(`Server running on port ${port}`));

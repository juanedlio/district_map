const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const mainController = require('./controllers/mainController');
const helpers = require('./helpers');

require('dotenv').config({ path: '.env' });


// const hostname = '127.0.0.1';
const port = process.env.PORT;

app.use(express.static(__dirname));
app.set("views", path.join("./views"));
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
})

app.listen(process.env.PORT || 5000, console.log(`Server running on port ${port}`));

app.get('/', mainController.homePage);

app.post('/', mainController.checkAddress);
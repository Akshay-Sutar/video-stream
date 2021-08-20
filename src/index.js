const express = require("express");
let ejs = require("ejs");
const path = require('path');

const app = express();

app.use(express.json()); // req.body
app.use(express.urlencoded({
    extended: true
})); // parses application/x-www-form-urlencoded content and stores in req.body

// Set views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(require('./routes'));

app.listen(3000, () => {
  console.log("server started at port 3000");
});

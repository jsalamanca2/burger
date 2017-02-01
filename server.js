var controller = require("./controllers/burgers_controller.js")

var express = require('express')

var app = express()
var bodyParser = require("body-parser");
//
var PORT = 9000
app.use(bodyParser.urlencoded({ extended: false }));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


controller(app, PORT)
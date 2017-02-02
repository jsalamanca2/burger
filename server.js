var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

var app = express()

//
app.set('port', (process.env.PORT || 9000));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// connects burgers_controller.js
require('./controllers/burgers_controller.js')(app);

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
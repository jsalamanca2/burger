var express = require('express')
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
 
var app = express();
 
var exphbs = require("express-handlebars");

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

// Serve static content for the app to the browser:: (process.cwd)vs(_dirname +) ???
app.use(express.static(process.cwd() + "/"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "burgers_db"
});

  connection.connect(function(err) {
    console.log("connected as id " + connection.threadId);
  });

///route
app.get("/", function(req, res) {

    connection.query("SELECT * FROM Food;", function(err, data) {
      if (err) throw err;

      res.render("index", { Food : data });
    });
});

//posting data
app.post("/", function(req, res) {

connection.query("INSERT INTO Food (food_name) VALUES (?)", [req.body.event], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });

});


 
app.listen(9000);
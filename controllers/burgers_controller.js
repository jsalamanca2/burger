var app = require('./../server.js');

var burger = require('./../models/burger.js');
// Routes
module.exports = function(app) {
	// This takes the user to the homepage
	app.get('/', function(req, res) {
		burger.homePage(req, res);
	})

	// devour pushed
	app.post('/delete/:id', function(req, res) {
		var id = req.params.id;
		burger.devour(req, res, id);
	})

	// order pushed
	app.post('/', function(req, res) {
		var newestBurger= req.body.newestBurger;
		burger.newBurger(req, res, newestBurger);
	})
}
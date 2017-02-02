var queries = require("./../config/orm.js");

var burger = {
	// // When homepage is called
	homePage: function(req, res){
		queries.selectAll(function(error, results) {
		    if (error) throw error
		    res.render("index", {burgers: results});
		})
	},
	devour: function(req, res, id) {
		queries.updateOne(id, function(error, results) {
		    if (error) throw error
		    res.redirect('/');
		})
	},
	newBurger: function(req, res, newestBurger) {
		queries.insertOne(newestBurger, function(error, results) {
		    if (error) throw error
		   
		    res.redirect('/');
		})
	}
}

module.exports = burger;
var connection = require("./connection.js")

// Generic queries for selection, insert and updating
var queries = {
		selectAll :function (callback) {
		connection.query('SELECT * FROM burgers', callback)
	},
	//new burgers
		insertOne :function (newestBurger, callback) {
		connection.query('INSERT INTO burgers (burger_name) VALUES (?)', newestBurger, callback)
	},
	//updating the burgers to be eaten
		updateOne : function (id, callback) {
		connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?",id, callback)
	}
}


module.exports = queries
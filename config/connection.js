var mysql = require("mysql")


var connection = mysql.createConnection({
			host:"localhost",
			port: 3306,
			user: "root",
			password:"password",
			database:"burgers_db"
	})

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
})

//exports connection to be used in orm.js file
module.exports= connection;
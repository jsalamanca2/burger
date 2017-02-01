var orm = require("./connection.js")


orm.connection.connect(function(err){
	if (err)throw err 
		console.log("connected as id " + orm.connection.threadId)

})

// Generic queries for selection, insert and updating
var queries = {
	selectAll:  function(table, callback){
	orm.connection.query("SELECT * FROM " + table, callback)
	},
	insertInto: function(table, burger, callback){
		orm.connection.query("INSERT INTO " + table +" SET ?",[{
			burger_name: burger
		}], callback)
	},
	update: function(table, eaten, number){
		orm.connection.query("UPDATE" + table + " SET ? WHERE ?",[{
			devoured: eaten
			},{
				ID: number
			}], function(err,res){
				console.log(res)
			})
	}

}


module.exports = queries
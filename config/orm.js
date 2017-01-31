var orm = require("./connection.js")


orm.connection.connect(function(err){
	if (err)throw err 
		console.log("connected as id " + orm.connection.threadId)
	

})


var queries = {
	selectAll:  function(callback){
	orm.connection.query("SELECT * FROM Food", callback)
	},
	insertInto: function(food, callback){
		orm.connection.query("INSERT INTO Food SET ?", [{
			food_name: burger
			}], callback)
	},
	update: function(eaten, number){
		orm.connection.query("UPDATE Food SET ? WHERE ?",[{
			devoured: eaten
			},{
				ID: number
			}], function(err,res){
				console.log(res)
			})
	}

}


module.exports = queries
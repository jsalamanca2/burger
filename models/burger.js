var queries = require("../config/orm.js")

module.exports = {
	
			select:function(callback){
  				queries.selectAll("burger", callback)
  			},

  			insert: function(burger, callback){
  				queries.insertInto("burger" ,burger, callback)
  			}
  			



}
var queries = require("../config/orm.js")



module.exports =  function(app,port){


		app.listen(port, function(){
			console.log("listening on port " + port)
		})



		app.get("/", function(err,res){
			queries.selectAll(function(err,data){
				console.log(data)
				res.render("index", {food:data})
			})
			
		})


		app.post("/", function(req,res){
			queries.insertInto(req.body.food, function(err,data){
				res.redirect("/")
			})
		})


}// end controller
	
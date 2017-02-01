var queries = require("../models/burger.js")



module.exports =  function(app,port){


		app.listen(port, function(){
			console.log("listening on port " + port)
		})

		app.get("/", function(err,res){
			queries.select(function(resp,data){
				res.render("index", {burger:data})
			})
		})

		app.post("/", function(req,res){
			queries.insert(req.body.burgers, function(err,data){
					console.log(req.body.burgers)
				res.redirect("/")
			})
		})


}// end controller
module.exports = function(app, RecipeModel){
	
	//getter		
	app.get('/api/recipes', function(req, res){
		RecipeModel.find(function(err, recipes){
			if(err)
				res.send(err);
			res.json(recipes);
		});
	});
	
	//setter
	app.post('/api/recipes', function(req,res){
		RecipeModel.create({
			title: req.body.title,
			description: req.body.description,
			ingredients: req.body.ingredients,
			directions: req.body.directions
		}, function(err, recipe){
			if(err)
				res.send(err);
			RecipeModel.find(function(err, recipes){
				if(err)
					res.send(err);
				res.json(recipes);
			});
		});
	});

	//accept front end requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); 
	});
};
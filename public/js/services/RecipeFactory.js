//request and sends data to api

angular.module('RecipeFactory',[]).factory('RecipeFactory', function($http){
	var recipeFactory = {};

	recipeFactory.getRecipe = function(){
			return $http.get('/api/recipes');
			};

	recipeFactory.createRecipe = function(recipe){
			return $http.post('/api/recipes', recipe);
			};

	return recipeFactory; 
});

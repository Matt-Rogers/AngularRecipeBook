//main controller. Need to move success and error handling over to the factory where it should be

angular.module('RecipeController',[]).controller('RecipeCtrl', function( $state, $scope, RecipeFactory, $q, ModalService){
	$state.transitionTo('home');
	$scope.ingredients = {"name": "", "amount":""};
	$scope.directions = {"name":"", "time": ""};
	$scope.recipes = [];
	$scope.currentPage = 1;
	$scope.numberPerPage = 10;
	$scope.maxSize = 5;

	$scope.newRecipeData = {
		"title": "",
		"description" : "",
		"ingredients": [],
		"directions": []
		};

	$scope.getRecipe = function() {
		RecipeFactory.getRecipe()
		.success(function(data){
			$scope.recipes = data;
			console.log($scope.recipes);
		})
		.error(function(data){
			console.log('Error: ' + data);
		});
	};
	$scope.getRecipe(); 
	
	$scope.createRecipe = function() {
		console.log($scope.newRecipeData);
		RecipeFactory.createRecipe($scope.newRecipeData)
			.success(function(data){
				$scope.recipes = data;
				$scope.newRecipeData = {};
				console.log(data);
		})
		.error(function(data){
			console.log('Error: ' + data);
		});
	};
	$scope.addIngredient = function() {
		$scope.newRecipeData.ingredients.push({	name:$scope.ingredients.name, 
												amount:$scope.ingredients.amount});
		$scope.ingredients.name ="";
		$scope.ingredients.amount = "";		
	};
	$scope.removeIngredient = function(array, index){
		array.splice(index, 1);
	};
	$scope.addDirection = function() {
		$scope.newRecipeData.directions.push({	name:$scope.directions.name});												
		$scope.directions.name ="";	
	};
	$scope.removeDirection = function(array, index){
		array.splice(index, 1);
	};

	//sets up number of pages for ui pagantor. 
	$scope.numPage = function(){
		return Math.ceil($scope.recipes.length / $scope.numPerPage);
	};

	$scope.$watch('currentPage + numPerPage', function () {
		var front = (($scope.currentPage -1) * $scope.numPerPage);
		var end = front + $scope.numPerPage;

		$scope.filteredRecipes = $scope.recipes.slice(front, end);
	});

	//work in progress. Need to update modal with item that is being referenced
	//will pass in item id and search $scope.filteredRecipes
	$scope.showRecipe = function() {
		//var recipe = getRecipeById(id);

		//var modalOptions = {
		//	closeButtonText: 'Close',
			//headerText: recipe.title,
			//ingredientsText: recipe.ingredients,
		//};

		ModalService.showModal({},{});
	};
});
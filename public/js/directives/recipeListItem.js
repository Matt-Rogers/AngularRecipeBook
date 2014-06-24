angular.module('recipeListItem',[]).directive('recipeListItem', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/recipe-list.html'		
	};
});
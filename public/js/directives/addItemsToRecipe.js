angular.module('addItemsToRecipe',[]).directive('addItemsToRecipe', function(){
	return{
		scope:{
			items:"="
		},
		templateUrl: 'templates/addItems.html'
	}
});
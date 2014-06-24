//ui router states for navigation and nested views

angular.module('uiRoutes',[]).config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'templates/home.html'
			})
			.state('home.recipe',{
				url: '/:recipe',
				templateUrl: 'templates/home-recipe.html',
				controller: function( $scope, $stateParams) {
					for(var i = 0; i < $scope.recipes.length; i ++){
						if($scope.recipes[i].title === $stateParams.recipe)
							$scope.recipe = $scope.recipes[i];
					}
				}
			})
			.state('create', {
				url:'/create',
				templateUrl: 'templates/create.html',
				controller: function($state){
					$state.transitionTo('create.details');
				}
			})
			.state('create.details', {
				url:'/details',
				templateUrl: 'templates/create-details.html'
			})
			.state('create.ingredients',{
				url: '/ingredients',
				templateUrl: 'templates/create-ingredients.html'
			})
			.state('create.directions',{
				url: '/directions',
				templateUrl: 'templates/create-directions.html'
			})
			.state('create.images',{
				url: '/ingredients',
				templateUrl: 'templates/create-images.html'
			})
			.state('create.submit', {
				url:'/review',
				templateUrl: 'templates/create-submit.html'
			})		
		});
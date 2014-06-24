angular.module('ModalService',[]).service('ModalService', function ($modal) {
	
	var modalDefaults = {
		backdrop: true,
		keyboard: true,
		modalFade: true,
		templateUrl: 'templates/recipeModal.html'
	};

	var modalOptions = {
		closeButton: 'Close',
		actionButton: 'OK',
		headerText: 'Delicious',
		bodyText: 'This is where the recipe would go'
	};

	this.showModal = function (customModalDefaults, customModalOptions){
		if (!customModalDefaults) customModalDefaults = {};
		customModalDefaults.backdrop = true;
		return this.show(customModalDefaults, customModalOptions);
	};

	this.show = function (customModalDefaults, customModalOptions) {

		var tempModalDefaults = {};
		var tempModalOptions = {};

		angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

		angular.extend(tempModalOptions, modalOptions, customModalOptions);

		if(!tempModalDefaults.controller){
			tempModalDefaults.controller = function($scope, $modalInstance){
				$scope.modalOptions = tempModalOptions;
				$scope.modalOptions.ok = function(result) {
					$modalInstance.close(result);
				};
				$scope.modalOptions.close = function(result) {
					$modalInstance.dismiss('cancel');
				};
			}
		}
		return $modal.open(tempModalDefaults).result;
	};
});
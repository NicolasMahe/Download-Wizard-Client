angular.module('module_layout')

.controller('HeaderController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

	$scope.checkFirstPath = function(path)
	{
		return ($location.path() == path);
	}
	
}]);
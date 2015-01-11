angular.module('module_searchMeta')

.controller('module_searchMeta_search', function ($scope) {
    
	//$scope.detailDataImdb = null;

    $scope.$watch(
        function() {
            return $scope.detailDataImdb;
        },
        function() {
        	if($scope.detailDataImdb) {
				$scope.searchvalueForTorrent = $scope.detailDataImdb.title;
				
				console.log($scope.searchvalueForTorrent);
		    }
        }
    );
    
    
});
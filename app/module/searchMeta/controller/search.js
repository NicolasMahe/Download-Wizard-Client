angular.module('module_searchMeta')

.controller('module_searchMeta_search', function ($scope, webservice_metadata) {
    

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
    
    $scope.search = function(search) {
        return webservice_metadata.search(search).then(function(data) {
            return data;
        });
      };

    $scope.typeaheadSelect = function(item, model, label) {
        $scope.selectedImdbId = item.imdbID;
    };
    
});
angular.module('module_searchMeta')

.controller('module_searchMeta_fiche', function ($scope, webservice_metadata) {
    
    $scope.loading = 0;
    $scope.result = null;
    
    $scope.getMeta = function(imdbID) {
        if(imdbID) {
            $scope.loading++;

            webservice_metadata.get("", imdbID).then(function(data) {
                $scope.loading--;
                $scope.result = data;

                $scope.detailedData = data;
            });
        }
    };
    
    $scope.$watch(
        function() {
            return $scope.imdbID;
        },
        function() {
            $scope.getMeta($scope.imdbID);
        }
    );
    
});
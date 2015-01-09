angular.module('module_searchEngine')

/*
 * module_searchEngine_search
 * 
 * variable from the directive
 * @param var searchValue
 * @param var orderBy
 * @param int limitTo
 * @param bool activeIMDb
 */
.controller('module_searchEngine_search', function ($scope, webservice_searchEngine) {
          
    $scope.searchValueOld = "";
    $scope.result = null;
    $scope.isLoading = false;
    
    $scope.search = function(search) {
        if(search != $scope.searchValueOld) {
            $scope.isLoading = true;
            webservice_searchEngine.search(search).then(function(response) {
                $scope.searchValueOld = search;
                $scope.result = response.data;
                $scope.isLoading = false;
            }, function(data) {
                console.log("error", data);
            });
        }
    };
    
    $scope.showAll = function() {
        $scope.trackerLimitTo = 999;
    };
    
    $scope.$watch(
        function() {
            return $scope.searchValue;
        },
        function() {
            $scope.search($scope.searchValue);
        }
    );
});
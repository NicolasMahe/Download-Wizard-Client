angular.module('module_searchMeta')

.controller('module_searchMeta_resultTable', function ($scope, webservice_metadata) {
    
    $scope.loading = 0;
    $scope.result = null;
    
    $scope.search = function(search) {
        if(search) {
            $scope.loading++;
            
            webservice_metadata.search(search).then(function(data) {
                $scope.result = data;
                $scope.loading--;
                
                if(data.length == 1) {
                    $scope.select($scope.result[0]);
                }
            });
        }
    };
    
    $scope.select = function(item, $event) {
        if($event) {
            $($event.currentTarget).parents('table').find('tr').removeClass('active');
            $($event.currentTarget).addClass('active');
        }
        
        $scope.selectedImdbId = item.imdbID;
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
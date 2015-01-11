angular.module('module_searchEngine')

/*
 * module_searchEngine_resultTable
 * 
 * variable from the directive
 * @param var searchValue
 * @param var orderBy
 * @param int limitTo
 * @param bool activeIMDb
 */
.controller('module_searchEngine_resultTable', function ($scope, webservice_searchEngine, webservice_metadata, service_recognizeMetadata) {
          
    $scope.searchValueOld = "";
    $scope.result = null;
    $scope.isLoading = false;
    $scope.metadata = {};
    
    $scope.search = function(search) {
        if(search != $scope.searchValueOld) {
            $scope.isLoading = true;
            webservice_searchEngine.search(search).then(function(response) {
                $scope.searchValueOld = search;
                $scope.result = response.data;
                $scope.isLoading = false;
                
                angular.forEach($scope.result, function(torrent, key) {
                    torrent.recognizeMetadata = service_recognizeMetadata(torrent.title);

                    //add metadata
                    webservice_metadata.getFromRecognizeMetadata(torrent.recognizeMetadata).then(function(data) {
                        torrent.metadata = data;
                    });
                });
            }, function(data) {
                console.log("error", data);
            });
        }
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
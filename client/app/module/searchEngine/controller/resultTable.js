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
          
    var searchValueOld = "";
    $scope.result = null;
    $scope.loading = 0;
    
    $scope.search = function(search) {
        if(search != $scope.searchValueOld && search !== "") {
            $scope.loading++;
            webservice_searchEngine.search(search).then(function(response) {
                $scope.searchValueOld = search;
                $scope.result = response.data;
                $scope.loading--;
                
                angular.forEach($scope.result, function(torrent, key) {
                    torrent.recognizeMetadata = service_recognizeMetadata(torrent.title);

                    //add metadata
                    $scope.loading++;
                    webservice_metadata.getFromRecognizeMetadata(torrent.recognizeMetadata).then(function(data) {
                        $scope.loading--;
                        torrent.metadata = data;
                    });
                });
            }, function(data) {
                console.log("error", data);
            });
        }
    };

    $scope.showAllResult = function() {
        $scope.limitTo = 999;
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
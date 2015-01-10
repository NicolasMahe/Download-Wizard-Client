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
.controller('module_searchEngine_search', function ($scope, webservice_searchEngine, webservice_metadata, service_recognizeMetadata) {
          
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
                    torrent.metadata = service_recognizeMetadata(torrent.title);
                    
                    //add metada
                    if(torrent.metadata.title !== null) {
                        metadataName = torrent.metadata.title.toLowerCase().replace(/\s+/g, '') + torrent.metadata.year;
                        torrent.metadataName = metadataName;
                        if($scope.metadata[metadataName] === undefined) {
                            $scope.metadata[metadataName] = {"_meta" : torrent.metadata};
                        }
                    }
                });
                                
                angular.forEach($scope.metadata, function(metadata, key) {
                    if(metadata._meta) {
                        webservice_metadata.get(metadata._meta.title).then(function(response) {
                            $scope.metadata[key] = response.data;
                        }, function(data) {
                            console.log("error", data);
                        });
                    }
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
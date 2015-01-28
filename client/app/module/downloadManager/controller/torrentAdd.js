angular.module('module_downloadManager')
/*
 * module_downloadManager_torrentAdd
 */
.controller('module_downloadManager_torrentAdd', function ($scope, $timeout, webservice_downloadManager) {
  
  $scope.progress = 0;
  $scope.files = null;

  $scope.$watch('files', function() {
    if($scope.files) {
      webservice_downloadManager.addFile($scope.files)
      .progress(function(evt) {
        $scope.progress = parseInt(100.0 * evt.loaded / evt.total, 10);
      })
      .success(function(data, status, headers, config) {
        $scope.progress = 100;

        $timeout(function() {
          //reset
          $scope.files = null;
          $scope.progress = 0;

          if($scope.successFunction) {
            $scope.successFunction();
          }
        }, 500);

      });
    }
  });
  
});

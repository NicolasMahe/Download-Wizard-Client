angular.module('module_downloadManager')
/*
 * module_downloadManager_torrentAdd
 */
.controller('module_downloadManager_torrentAdd', function ($scope, webservice_downloadManager) {
  
  $scope.$watch('files', function() {
    if($scope.files) {
      webservice_downloadManager.addFile($scope.files)
      .progress(function(evt) {
        //console.log('progress: ' + parseInt(100.0 * evt.loaded / evt.total) + '% file :', evt.config.file);
      }).success(function(data, status, headers, config) {
        //console.log('file ', config.file, 'is uploaded successfully. Response: ', data);

        if($scope.successFunction) {
          $scope.successFunction();
        }
      });
    }
  });
  
});

angular.module('module_downloadManager')

/*
 * module_downloadManager_torrentsTable
 */
.controller('module_downloadManager_torrentsTable', function ($scope, webservice_downloadManager) {
          
    $scope.torrentList = null;
    $scope.torrentInfo = null;
    $scope.loading = 0;
    $scope.upload_speed = 0;
    $scope.download_speed = 0;
    $scope.uploaded = 0;
    $scope.downloaded = 0;
    
    $scope.getAll = function() {
      $scope.loading++;
      
      webservice_downloadManager.getAll().success(function(data) {
        $scope.torrentList = data;
        
        $scope.upload_speed = 0;
        $scope.download_speed = 0;
        $scope.uploaded = 0;
        $scope.downloaded = 0;
        
        angular.forEach($scope.torrentList, function(torrent, key) {
          torrent.progress = torrent.downloaded / torrent.length;
          
          $scope.upload_speed += torrent.upload_speed;
          $scope.download_speed += torrent.download_speed;
          $scope.uploaded += torrent.uploaded;
          $scope.downloaded += torrent.downloaded;
        });
        $scope.loading--;
        
      });
    };
    
    $scope.remove = function(torrent) {
        if (confirm("Remove '" + torrent.name + "' ?") === true) {
            $scope.loading++;

            webservice_downloadManager.remove(torrent.id).success(function(data) {
                $('#module_downloadManager_torrentsTable_Modal_Info').modal('hide');
                $scope.loading--;
                $scope.getAll();
            });
        }
    };
    
    $scope.showInfo = function(torrent) {
        $scope.loading++;

        webservice_downloadManager.get(torrent.id).success(function(data) {
            $scope.torrentInfo = data;
            //if($('#DownloaderTorrentListModal').css('display') != "block") {
              $('#module_downloadManager_torrentsTable_Modal_Info').modal('show');
            //}
            $scope.loading--;
        });
    };
    
    $scope.getAll();
});
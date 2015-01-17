angular.module('module_downloadManager')

.factory('$localeDurations', [function () {
  return {
    'one': {
      year: '{} year',
      month: '{} month',
      week: '{} week',
      day: '{} day',
      hour: '{}h',
      minute: '{}m',
      second: '{}s',
      millisecond: '{} millisecond'
    },
    'other': {
      year: '{} years',
      month: '{} months',
      week: '{} weeks',
      day: '{} days',
      hour: '{}h',
      minute: '{}m',
      second: '{}s',
      millisecond: '{} milliseconds'
    }
  };
}])
/*
 * module_downloadManager_torrentsTable
 */
.controller('module_downloadManager_torrentsTable', function ($scope, webservice_downloadManager, config) {
  $scope.torrents = {}; // A dictionnary of torrents

  $scope.torrentInfo = null;
  $scope.loading = 0;

  $scope.update_torrent = function(torrent) {
    $scope.torrents[torrent.id] = torrent;
    torrent.progress = torrent.downloaded / torrent.length;
    torrent.remaining_time = (torrent.length - torrent.downloaded) / torrent.download_speed;
    torrent.last_update = Date.now();

    $scope.downloaded = 0;
    $scope.uploaded = 0;
    $scope.download_speed = 0;
    $scope.upload_speed = 0;
    angular.forEach($scope.torrents, function(torrent, id) {
      $scope.downloaded += torrent.downloaded;
      $scope.uploaded += torrent.uploaded;
      $scope.download_speed += torrent.download_speed;
      $scope.upload_speed += torrent.upload_speed;
    });
  };

  $scope.getAll = function() {
    $scope.loading++;

    webservice_downloadManager.getAll().success(function(data) {
      $scope.torrents = {};
      data.forEach(function(torrent) {
        $scope.update_torrent(torrent);
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
      });
    }
  };

  $scope.showInfo = function(torrent) {
    $scope.torrentInfo = torrent.id;

    if(!torrent.last_update || !torrent.peers || !torrent.files) {
      $scope.loading++;
      webservice_downloadManager.get(torrent.id).success(function(torrent) {
        $scope.update_torrent(torrent);
        $('#module_downloadManager_torrentsTable_Modal_Info').modal('show');
        $scope.loading--;
      });
    }
    else {
      $('#module_downloadManager_torrentsTable_Modal_Info').modal('show');
    }
  };

  /* Launch first update */
  $scope.getAll();

  /* Real-time update logic */
  var socket = io(config.backend.url + 'download');
  socket.on('update', function(torrent_id, data) {
    $scope.$apply(function() {
      if(torrent_id) {
        $scope.update_torrent(data);
      }
      else {
        data.forEach(function(torrent) {
          $scope.update_torrent(torrent);
        });
      }
    });
  });

  socket.on('remove', function(torrent_id) {
    if(!torrent_id) {
      return;
    }
    $scope.$apply(function() {
      delete $scope.torrents[torrent_id];
    });
  });
});

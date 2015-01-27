angular.module('webservice_downloadManager', [])

.factory('webservice_downloadManager', function ($http, config, $upload) {
  return {
    getAll: function () {
      return $http.get(config.backend.url + 'download/torrent');
    },
    addDownloadFromSearchHash: function (hash) {
      return $http.put(config.backend.url + 'download/torrent/' + hash);
    },
    addFile: function (torrent) {
      return $upload.upload({
        url: config.backend.url + 'download/torrent',
        file: torrent
      });
    },
    get: function (id) {
      return $http.get(config.backend.url + 'download/torrent/' + id);
    },
    remove: function (id) {
      return $http.delete(config.backend.url + 'download/torrent/' + id);
    }
  };
});
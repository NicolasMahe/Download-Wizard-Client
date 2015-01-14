angular.module('webservice_downloadManager', [])

.factory('webservice_downloadManager', function ($http, config) {
  return {
    getAll: function () {
      return $http.get(config.backend.url + 'download/torrent');
    },
    addDownloadFromSearchHash: function (hash) {
      return $http.put(config.backend.url + 'download/torrent/' + hash);
    },
    get: function (id) {
      return $http.get(config.backend.url + 'download/torrent/' + hash);
    },
    remove: function (hash) {
      return $http.delete(config.backend.url + 'download/torrent/' + hash);
    }
  };
});
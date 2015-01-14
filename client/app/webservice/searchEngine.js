angular.module('webservice_searchEngine', [])

.factory('webservice_searchEngine', function($http, config) {
  return {
    search: function(searchValue) {
      return $http.get(config.backend.url+'search/'+searchValue);
    }
  };
});
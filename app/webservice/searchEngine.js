angular.module('webservice')

.factory('webservice_searchEngine', function($http, config) {
    return {
    	search: function(searchValue) {
	    	return $http.jsonp(config.backend.url+'sources/search/'+searchValue+'?callback=JSON_CALLBACK');
    	},
    	download: function(link) {
	    	return $http.get('/download/IPTorrents/'+link);
    	}
    }
});
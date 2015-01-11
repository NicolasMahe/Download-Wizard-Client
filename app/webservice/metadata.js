angular.module('webservice_metadata', [])

.factory('webservice_metadata', function($q, $http, config) {

	var cache = {};

    var self = {
		getFromRecognizeMetadata: function(metadata) {
			if(metadata.title !== null) {
                var metadataName = metadata.title.toLowerCase().replace(/\s+/g, '') + metadata.year;
                if(cache[metadataName] === undefined) {
					cache[metadataName] = self.get(metadata.title).then(function(data) {
                        cache[metadataName] = data;
						return data;
                    }, function(data) {
                        console.log("error", data);
                    });
                    return cache[metadataName];
                }
                return $q.when(cache[metadataName]);
            }
            return $q.when(undefined);
		},
		get: function(searchValue) {
			return $http.get('http://www.omdbapi.com/?t='+searchValue+'&y=&plot=short&r=json').then(function(response) {

				//transform the response data
				if(response.data.Error) {
					formated = {};
				} else {
					formated = {
						actors		: response.data.Actors,
						country		: response.data.Country,
						director	: response.data.Director,
						genre		: response.data.Genre,
						language	: response.data.Language,
						released	: response.data.Released,
						title		: response.data.Title,
						writers		: response.data.Writer,
						year		: parseInt(response.data.Year, 10),
						runtime		: response.data.Runtime,
						poster		: response.data.Poster,
						metascore	: parseInt(response.data.Metascore, 10),
						imdbID		: response.data.imdbID,
						imdbRating	: parseFloat(response.data.imdbRating, 10),
						imdbVotes	: parseInt(response.data.imdbVotes.replace(',', ''), 10),
						imdbUrl		: 'http://www.imdb.com/title/' + response.data.imdbID
					};
				}

				return formated;
			});
		}
	};

	return self;
});
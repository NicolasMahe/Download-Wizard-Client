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
		get: function(searchValue, imdbID) {
			return $http.get('http://www.omdbapi.com/?t='+searchValue+'&y=&i='+imdbID+'&plot=short&r=json').then(function(response) {

				if(response.data.Error) {
					formated = {};
				} else {
					formated = {
						actors		: response.data.Actors,
						country		: response.data.Country,
						director	: response.data.Director,
						plot		: response.data.Plot,
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
		},
		search: function(searchValue, imdbID) {
			return $http.get('http://www.omdbapi.com/?s='+searchValue+'&r=json').then(function(response) {

				var data = [];
				if(!response.data.Error) {
					angular.forEach(response.data.Search, function(result, key) {
						var formated = {
							title		: result.Title,
							year		: parseInt(result.Year, 10),
							imdbID		: result.imdbID,
							type		: result.Type,
							imdbUrl		: 'http://www.imdb.com/title/' + result.imdbID
						};

						data.push(formated);
					});
				}

				return data;
			});
		}
	};

	return self;
});
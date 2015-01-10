angular.module('webservice')

.factory('webservice_metadata', function($http, config) {
    return {
		get: function(searchValue) {
			return $http.get('http://www.omdbapi.com/?t='+searchValue+'&y=&plot=short&r=json').then(function(response) {

				//transform the reponse data
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

				response.data = formated;

				return response;
			});
		}
	};
});
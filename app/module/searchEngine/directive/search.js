angular.module('module_searchEngine')

/**
 * Search 'search-value' on the search engine and display a result table
 * 
 * Example:
 * <directive-search-engine-search active-imdb="true" search-value="{{searchvalueset}}" limit-to="999" order-by=""></directive-search-engine-search>
 */
.directive('directiveSearchEngineSearch', function() {
    return {
        restrict: 'E',
        scope: {
            searchValue: '@searchValue',
            orderBy: '@orderBy',
            limitTo: '@limitTo',
            activeIMDb: '@activeImdb'
        },
        controller: "module_searchEngine_search",
        templateUrl: '/app/module/searchEngine/template/search.tpl.html',
        link: function(scope) {
            
        }
    };
});
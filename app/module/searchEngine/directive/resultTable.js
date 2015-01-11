angular.module('module_searchEngine')

/**
 * Search 'search-value' on the search engine and display a result table
 * 
 * Example:
 * <directive-search-engine-result-table active-imdb="true" search-value="{{searchvalueset}}" limit-to="999" order-by=""></directive-search-engine-result-table>
 */
.directive('directiveSearchEngineResultTable', function() {
    return {
        restrict: 'E',
        scope: {
            searchValue: '@searchValue',
            orderBy: '@orderBy',
            limitTo: '@limitTo',
            activeIMDb: '@activeImdb'
        },
        controller: "module_searchEngine_resultTable",
        templateUrl: '/app/module/searchEngine/template/resultTable.tpl.html',
        link: function(scope) {
            
        }
    };
});
angular.module('module_searchMeta')

/*
 *  <directive-search-meta-result-table>
 */
.directive('directiveSearchMetaResultTable', function() {
    return {
        restrict: 'E',
        scope: {
            searchValue: '@searchValue',
            selectedImdbId: "=selectedImdbId"
        },
        controller: "module_searchMeta_resultTable",
        templateUrl: 'app/module/searchMeta/template/resultTable.tpl.html',
        link: function(scope) {
            
        }
    };
});
angular.module('module_searchEngine')

/**
 * <directive-search-engine-form-result-table>
 */
.directive('directiveSearchEngineFormResultTable', function() {
    return {
        restrict: 'E',
        scope: {
        },
        controller: "module_searchEngine_formResultTable",
        templateUrl: '/app/module/searchEngine/template/formResultTable.tpl.html',
        link: function(scope) {
            
        }
    };
});
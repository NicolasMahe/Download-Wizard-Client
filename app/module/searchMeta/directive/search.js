angular.module('module_searchMeta')

/*
 *  <directive-search-meta-search>
 */
.directive('directiveSearchMetaSearch', function() {
    return {
        restrict: 'E',
        scope: {
        },
        controller: "module_searchMeta_search",
        templateUrl: 'app/module/searchMeta/template/search.tpl.html',
        link: function(scope) {
            
        }
    };
});
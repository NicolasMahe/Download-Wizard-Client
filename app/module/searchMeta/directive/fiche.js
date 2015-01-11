angular.module('module_searchMeta')

/*
 *  <directive-search-meta-fiche imdbId="">
 */
.directive('directiveSearchMetaFiche', function() {
    return {
        restrict: 'E',
        scope: {
            imdbID: '@imdbId',
            detailedData: '=detailedData'
        },
        controller: "module_searchMeta_fiche",
        templateUrl: 'app/module/searchMeta/template/fiche.tpl.html',
        link: function(scope) {
            
        }
    };
});
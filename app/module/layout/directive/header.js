angular.module('module_layout')

.directive('headerDirective', function() {
	return {
		restrict: 'E',
		templateUrl: '/app/module/layout/template/header.tpl.html',
                link: function(scope) {
                    $('.navbar-collapse a').click(function() {
                        console.log('TODO: improve collapse of the header for mobile only');
                        $('.navbar-collapse').collapse('hide');
                    })
                }
	};
});
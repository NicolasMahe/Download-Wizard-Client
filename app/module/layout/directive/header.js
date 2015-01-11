angular.module('module_layout')

.directive('headerDirective', function() {
	return {
		restrict: 'E',
		templateUrl: '/app/module/layout/template/header.tpl.html',
                link: function(scope) {
                    $('.navbar-collapse a').click(function() {
                        $('body.screen-xs .navbar-collapse').collapse('hide');
                    });
                }
	};
});
angular.module('module_layout')

.directive('directiveLayoutHeader', function() {
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
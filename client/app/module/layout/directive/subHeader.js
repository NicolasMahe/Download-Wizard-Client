angular.module('module_layout')

.directive('directiveLayoutSubheader', function() {
	return {
		restrict: 'E',
		templateUrl: '/app/module/layout/template/subHeader.tpl.html'
	};
});
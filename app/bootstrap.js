angular.module('downloadWizard', [
	//angular
	'ngRoute',

	//config
	'config',

	//directive
	'directive_responsiveClass',

	//module
	'module_layout',

	//page
	'page_home'
])
.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider.
	otherwise({
		templateUrl: '/app/page/home/template/home.tpl.html',
		controller: 'page_home'
	});
}])
.run(function() {
    FastClick.attach(document.body);
});
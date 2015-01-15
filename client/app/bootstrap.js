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
	'page_home',
  'page_download'
])
.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider.
  when('/download', {
    templateUrl: '/app/page/download/template/download.tpl.html',
    controller: 'page_download'
  }).
	otherwise({
		templateUrl: '/app/page/home/template/home.tpl.html',
		controller: 'page_home'
	});
}])
.run(function() {
    FastClick.attach(document.body);
});
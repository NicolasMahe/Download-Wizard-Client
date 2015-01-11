angular.module('downloadWizard', [
  'ngRoute',
  'page',
  'webservice',
  'module',
  'config',
  'service',
  'directive_responsiveClass'
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
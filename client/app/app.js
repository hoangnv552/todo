;(function() {
	var app = angular.module('task', [
		'ngRoute',
		'ngResource'
	]);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			controller: 'List',
			templateUrl: 'app/views/list.html'
		})
		.when('/create', {
			controller: 'Create',
			templateUrl: 'app/views/create.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]).run(function() {

	});

	angular.element(window).ready(function() {
		angular.bootstrap(document.body, ['task']);
	});
})();
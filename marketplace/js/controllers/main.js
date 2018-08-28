var marketpace = angular.module('marketplace', ['ngRoute']);

marketpace.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'views/marketplace/apps.html',
			controller  : 'AllAppsController'
		})
		.when('/featured/', {
			templateUrl : 'views/marketplace/apps.html',
			controller  : 'FeaturedAppsController'
		})
		.when('/recent/', {
			templateUrl : 'views/marketplace/apps.html',
			controller  : 'RecentAppsController'
		})
		.when('/apps/:appId', {
			templateUrl : 'views/marketplace/app.html',
			controller  : 'AppController'
		})
		.otherwise({
			redirectTo: '/'
		});
});

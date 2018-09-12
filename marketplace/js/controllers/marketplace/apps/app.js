angular.module('marketplace')
.controller('AppController', function ($scope, $http, $routeParams) {


	var api = 'https://platform.ingress.dev.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/marketplace/api/Products.js';

	function getApp() {
		$http.get(api + '/' + $routeParams.appId)
		.success(function(data) {
			$scope.application = data;
		});
	}
	getApp();

});

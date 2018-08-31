angular.module('marketplace')
.controller('FeaturedAppsController', function ($scope, $http) {

	$scope.activeTab = 'featuredApps';

	var api = 'https://store.ingress.dev.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/marketplace/api/Products.js';

	function loadApps() {
		$http.get(api + '/featured')
		.success(function(data) {
			$scope.featuredApps = data;
		});
	}
	loadApps();

	function loadTopPaidApps() {
		$http.get(api + '/top/paid')
		.success(function(data) {
			$scope.topPaidApps = data;
		});
	}
	loadTopPaidApps();

	function loadTopFreeApps() {
		$http.get(api + '/top/free')
		.success(function(data) {
			$scope.topFreeApps = data;
		});
	}
	loadTopFreeApps();
});

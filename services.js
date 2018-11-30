angular.module('services', []);
angular.module('services').controller('ServicesController', function ($scope, $http, $location) {
	
	var index = 'https://store.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/store/api/Site/Index.js/1';
	function loadIndex() {
		$http.get(index)
		.success(function(data) {
			$scope.data = data;
		});
	}
	loadIndex();
	
	var menu = 'https://store.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/store/api/Site/Menu.js/1';
	function loadMenu() {
		$http.get(menu)
		.success(function(data) {
			$scope.menu = data;
		});
	}
	loadMenu();
	
	var services = 'https://store.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/store/api/Site/Services.js/1';
	function loadServices() {
		$http.get(services)
		.success(function(data) {
			$scope.services = data;
		});
	}
	loadServices();
	
	var panels = 'https://store.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/store/api/Site/Panels.js?ServicesId=1';
	function loadPanels() {
		$http.get(panels)
		.success(function(data) {
			$scope.panels = data;
		});
	}
	loadPanels();
	
	var service = 'https://store.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/store/api/Site/Service.js?ServicesId=1';
	function loadService() {
		$http.get(service)
		.success(function(data) {
			$scope.service = data;
		});
	}
	loadService();

});
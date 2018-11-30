angular.module('about', []);
angular.module('about').controller('AboutController', function ($scope, $http, $location) {
	
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
	
	var about = 'https://store.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/store/api/Site/About.js/1';
	function loadAbout() {
		$http.get(about)
		.success(function(data) {
			$scope.about = data;
		});
	}
	loadAbout();

});
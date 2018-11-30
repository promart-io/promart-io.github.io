angular.module('index', []);
angular.module('index').controller('IndexController', function ($scope, $http) {

	var main = 'https://store.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/store/api/Site/Index.js/1';
	function loadMain() {
		$http.get(main)
		.success(function(data) {
			$scope.data = data;
		});
	}
	loadMain();
	
	var menu = 'https://store.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/store/api/Site/Menu.js/1';
	function loadMenu() {
		$http.get(menu)
		.success(function(data) {
			$scope.menu = data;
		});
	}
	loadMenu();
	
	var slides = 'https://store.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/store/api/Site/Slides.js?IndexId=1';
	function loadSlides() {
		$http.get(slides)
		.success(function(data) {
			$scope.slides = data;
		});
	}
	loadSlides();
	
	var features = 'https://store.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/store/api/Site/Features.js?IndexId=1';
	function loadFeatures() {
		$http.get(features)
		.success(function(data) {
			$scope.features = data;
		});
	}
	loadFeatures();
	
	var promotions = 'https://store.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/store/api/Site/Promotions.js?IndexId=1';
	function loadPromotions() {
		$http.get(promotions)
		.success(function(data) {
			$scope.promotions = data;
		});
	}
	loadPromotions();
	
	var clearance = 'https://store.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/store/api/Site/Clearance.js?IndexId=1';
	function loadClearance() {
		$http.get(clearance)
		.success(function(data) {
			$scope.clearance = data;
		});
	}
	loadClearance();
	

});
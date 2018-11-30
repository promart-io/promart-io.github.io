angular.module('contact', []);
angular.module('contact').controller('ContactController', function ($scope, $http, $location, $sce) {
	
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
	
	var contact = 'https://store.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/js/store/api/Site/Contact.js/1';
	function loadContact() {
		$http.get(contact)
		.success(function(data) {
			$scope.contact = data;
			$scope.location = $sce.trustAsResourceUrl('https://maps.google.com/maps?q=' + data.Street + '%20' + data.City + '=&z=13&ie=UTF8&iwloc=&output=embed');
		});
	}
	loadContact();
	
	
	

});
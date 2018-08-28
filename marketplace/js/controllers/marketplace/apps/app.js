angular.module('marketplace')
.controller('AppController', function ($scope, $http, $routeParams) {

	$scope.application = $routeParams.appId;

});

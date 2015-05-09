var atmModule = angular.module('atm', []);

atmModule.controller('MainController', function($scope) {
	$scope.balance = 0;

	$scope.deposit = function(type) {
		console.log(type);
	};

	$scope.withdraw = function(type) {
		console.log(type);
	};
});
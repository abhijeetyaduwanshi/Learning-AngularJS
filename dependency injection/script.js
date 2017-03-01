(function () {
	'use strict';

	angular.module('myApp', []).run(function () {
		console.log('app init');
	});

	//1	// to avoid the dependency injection
	//1	// one way directly refering to the function which implements the controller put the second peramater
	//1	// as array with all your dependencies in it and the last value of the array will be the function implementing
	//1	// controller
	//1	// angular.module('myApp').controller('UserCtrl', ['$rootScope', '$http', UserController]);
	angular.module('myApp').controller('UserCtrl', UserController);

	//2	// second way of assign an annonated property to the controller implementing function like 
	//2	// UserController.$inject = ['$rootScope', '$http'];
	UserController.$inject = ['$rootScope', '$http'];

	function UserController($rootScope, $http) {
		var usctrl = this;
		usctrl.name = "Angular";

		console.dir($rootScope);

		$http({
			method: 'GET',
			url: 'http://jsonplaceholder.typicode.com/users'
		}).then(function (success) {
			console.log(success);
		});
	}
})();
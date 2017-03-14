/*
inject the ngRoute in the myApp module
and then we will use the $routeProvider in the config block
but its a good practice to use the controller saprately so move the controller to an different file and add it to the index.html
*/

/*
now with the config function we will use the $routeProvider and $routeProvider has 2 properties when and otherwise
when has 2 paramaters, the url part and an object, this object atlest have 3 properties 1- templateUrl which is the html file 2-controller to the html and 3-alias to the controller
otherwise can be set to the home page so as that nothing is loaded then it will go to the otherwise block
*/
(function () {
	'use strict';

	angular.module('myApp', ['ngRoute']).config(moduleConfig);

	function moduleConfig($routeProvider) {
		$routeProvider
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'LoginCtrl',
			controllerAs: 'lctrl'
		}).when('/home', {
			templateUrl: 'home.html',
			controller: 'HomeCtrl',
			controllerAs: 'hctrl'
		}).when('/profile', {
			templateUrl: 'profile.html',
			controller: 'ProfileCtrl',
			controllerAs: 'pctrl'
		}).otherwise({
			redirectTo: '/login'
		});
	}
})();
(function () {
	'use strict';

	angular.module('myApp').controller('LoginCtrl', LoginController);

	LoginController.$inject = ['$location'];

	function LoginController($location) {
		var lctrl = this;
		console.log("login controller is pulled");

		// since we will use location service we have to inject it in our controller
		// also we could have used LoginController.$inject = ['$location']; or
		// angular.module('myApp').controller('LoginCtrl', ['$location', LoginController]);
		// if we are going to send this to production and the code will be minified
		lctrl.goToHome = function () {
			$location.path('/home');
			// so now if we go and click on login button on the login page then that will take us to the home page
		}
	}
})();
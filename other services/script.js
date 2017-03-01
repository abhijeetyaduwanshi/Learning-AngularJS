// angular has some serices which are wrappers of native javascript objects
// example window object, because it is global in nature
// but this javascript window object is immutable ie it can not be changed
// angular has a special service, wrapper around it called $window
// this is required if for eg we use it and have to test it then we will have to modify it and that will not be possible 
// also we have $location insted of window.location
// also $document instead of window.document
// same as $timeout there is $interval instead of window.setInterval()
// $interval(function(){console.log('executing after 3 sec'), 3000});

(function () {
	'use strict';

	angular.module('myApp', []);
	angular.module('myApp').controller('UserCtrl', UserController);

	UserController.$inject = ['$timeout', '$rootScope', '$templateCache'];

	function UserController($timeout, $rootScope, $templateCache) {
		var usctrl = this;
		usctrl.name = "Angular is my name";
		usctrl.name2 = "Angular is my name";

		// we want to change the name property and change the name to abhi and also update the ui
		// natively we use to use window.setTimeout() but in angular there is wrapper $timeout

		var promise = $timeout(function () {
			// since we are using service we have to inject it in the controllers
			usctrl.name = "Abhi";
			console.log('changed');
		}, 3000);
		// to cancel the timeout we can 
		// $timeout.cancel(promise);
		// then the timeout will not work
		// similar to the interval

		// now let use the setTimeout which is native and not a angular wrapper
		setTimeout(function () {
			// since we are using native element we do not have inject it in the controllers
			usctrl.name2 = "Abhi";
			console.log('changed');
		}, 3000);
		// this does not change the ui although the property has been changed and console has been logged but we have
		// but the 2 way databinding did not work

		/*
		there are watchers in angular
		when there is any change the watchers are notified
		after the change the scope is calculated and the digest cycle is fired ; digest cycle is the internal algorithm
		then each property in the scope is compared with the value before change which is called dirty checking
		dirty checking because each property in the scope is checked
		after the checking the updated properties are loaded and the old are as it is on the UI
		setTimeout is out of angular world where the watchers will not look
		whereas
		$timeout is a part of angular framework where the watchers will ne notified and after this the UI will be updated
		*/
		


		//rootScope is a special service
		$rootScope.someProp = "rootscope property";
		// the speciality of the property is that it can be accessed anywhere on the ui (no scope checking) and no 
		// alias or pre defination required because it is in the windows
		// but we have to inject it in the defining controller




		// $templateCache
		// this is the service which is pulling the html content from internal or external sources
		// these are nothing but the key value pairs where the key is the id with which we pull it and the value is the html
		// the html is cached in the angular memory using $templateCache service
		var myTemp = '<div name="mydiv">This is my template</div>';
		$templateCache.put('tempId.html', myTemp);
		// retrive the template from cache
		// $templateCache.get('tempId.htl');
		// load the template from server and cache it
		// $http.get('tempId.html', {cache: $templateCache});
}
})();
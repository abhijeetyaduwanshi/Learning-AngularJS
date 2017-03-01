// Services are used to share the commom code or the data accross the application
// the services can be injected in all the components 
// $rootScope and $http are the two services that where injected in the UserController module
// services are lazily initialized i.e. the services will be invoced only and only of they are needed and 
// not on the init of the application
// services are singletone per Angular module i.e. one instance of the service will run throughout the module
// because if we share the code accross the application then we need all the modules to have the same copy
// many in built services in the angualar most of them starts with $ so never start your service name with $
// eg: $rootScope, $http, $routeProviders


// this is the axample to inject the $rootScope and $http services in the module two ways
// angular.module('myApp').controller('UserCtrl', ['$rootScope', '$http', UserController]);
// or 
// UserController.$inject = ['$rootScope', '$http'];
// and then use it example given in dependency injection


// Creating the angular Service or Factory (Services and factory are the same)
(function () {
	'use strict';

	angular.module('myApp', []).run(function () {
		console.log('app init');
	});

	angular.module('myApp').controller('UserCtrl', UserController);

	// inject the factory from bottom and log it
	// bet we are not creating the new instance of DataFactory and we are just injecting it
	// angular will take care of the DataFactory factory = new DataFactory(); thing
	function UserController(DataFactory, DataService) {
		var usctrl = this;
		usctrl.name = "Angular is my name";

		console.dir(DataFactory);
		console.dir(DataService);

		// from factory
		console.log("From Factory" + DataFactory.getCount());
		DataFactory.incrementCount();
		console.log("From Factory" + DataFactory.getCount());

		// from service
		console.log("From Service" + DataService.getCount());
		DataService.incrementCount();
		console.log("From Service" + DataService.getCount());
		// when we see the console we see the name getCount and setCount but not the count which is = 0
		// because we have returned factoryObj and count is not the part of the factoryObj which is a local variable and 
		// cannot be accessed outside the factoryObj
		// this is just like incapsulation in JS
		// create the private variables and public methods and share the functionality
	}

	// creating the factory
	angular.module('myApp').factory('DataFactory', DataFactoryFn);

	function DataFactoryFn() {
		// to implement the factory we create an object and then return that instance
		var factoryObj = {};
		var count = 0;
		factoryObj.name = 'Name is Datafactory';

		factoryObj.getCount = function () {
			return count;
		}

		factoryObj.setCount = function (newCount) {
			count = newCount;
		}

		factoryObj.incrementCount = function () {
			count++;
		}

		return factoryObj;
	}

	// creating the service
	angular.module('myApp').service('DataService', DataServiceFn);

	function DataServiceFn() {
		// unlike factory we do not have to create an object and return that object
		// in service we can create an variable and the properties, functions and variables which we have to expose start with this keywork
		// and at the end you do not have to return anything
		// and to inject it we do the same as the factory
		var count = 0;
		this.name = 'Name is Datafactory';

		this.getCount = function () {
			return count;
		}

		this.setCount = function (newCount) {
			count = newCount;
		}

		this.incrementCount = function () {
			count++;
		}
	}
})();
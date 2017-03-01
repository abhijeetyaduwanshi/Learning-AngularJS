/*
Angular uses $http service for ajax call
to use it 
$http serivce provice a configuration 'configObj' parameter
2 function success and error
success accepts callback with parameters of data, status, headers, config parameter that was passed in the $http
same as error but instead of data we will get the error message

configObj

configObj = {
	method : 'GET' | 'POST',
	url : 'someUrl',
	params : 'string' | object /queryString,  get request
	data : 'string' | object / post,          post request
	cache : boolean | cacheInstant like $templateCache,
	timeout : number / in ms,
	responseType : 'json' | 'text' | 'xml' | 'document'
};

*/
(function () {
	'use strict';

	angular.module('myApp', []);
	angular.module('myApp').controller('UserCtrl', UserController);

	function UserController() {
		var usctrl = this;
		usctrl.name = "Angular is my name";
	}
})();
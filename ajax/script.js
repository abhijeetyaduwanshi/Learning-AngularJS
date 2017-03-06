/*
Angular uses $http service for ajax call
to use it 
$http serivce provice a configuration 'configObj' parameter
2 function success and error
success accepts callback with parameters of data, status, headers, config parameter that was passed in the $http
same is the error but inplace of data we will get the error message

configObj

configObj = {
	method : 'GET' | 'POST',
	url : '/someUrl',
	params : 'string' | object /queryString,  send data using get request
	data : 'string' | object / post,          send data using post request
	cache : boolean | cacheInstant like $templateCache,
	timeout : number / in ms,
	responseType : 'json' | 'text' | 'xml' | 'document'
};

*/
(function () {
	'use strict';

	angular.module('myApp', []);
	angular.module('myApp').controller('UserCtrl', UserController);

	UserController.$inject = ['$http'];

	function UserController($http) {
		var uc = this;

		// get request
		var requestObj = {
			postId: 1
		};

		$http({
			method: 'GET',
			url: 'http://jsonplaceholder.typicode.com/comments',
			params: requestObj
		}).then(successCallBack, errorCallBack);
		function successCallBack(data, status, headers, config) {
			console.log(data);
		};
		function errorCallBack(data, status, headers, config) {
			console.log(data);
		};


		// POST request
		var requestObj = {
			title: 'My new blog post',
			userId: 1,
			body: 'Read my new blog'
		};

		$http({
			method: 'POST',
			url: 'http://jsonplaceholder.typicode.com/posts',
			data: requestObj
		}).then(successCallBack, errorCallBack);
		function successCallBack(data, status, headers, config) {
			console.log(data);
		};
		function errorCallBack(data, status, headers, config) {
			console.log(data);
		};

		/*
		http.post and jQuery.post differ in serializing and sending the data
		http.post passes data as JSON object and you may not see the data on the server side
		jQuery.post transforms the json object into form-urlencoded form eg: 'property1=value1&property2=value2'
		if the server side language can not understand json data in the request it will treat the request data as empty
		solution

		this is jQuery param we will take its help in translating the data then processing it to $http

		$.param({
			title: 'My new blog post',
			userId: 1,
			body: 'Read my new blog' 
		});
		$http({
			method: 'POST',
			url: someurl,
			data: $.param($scope.formData),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(success, error);
		function success(data, status, headers, config) {
			console.log(data);
		};
		function error(data, status, headers, config) {
			console.log(data);
		};
		*/

	};
})();
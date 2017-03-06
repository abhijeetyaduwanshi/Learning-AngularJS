(function () {
	'use strict';

	angular.module('myApp', []);
	angular.module('myApp').controller('UserCtrl', UserController);

	UserController.$inject = ['$http'];

	function UserController($http) {
		var uc = this;
		uc.name = 'Angular Filter';

		$http({
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users'
		}).then(successCallBack, errorCallBack);
		function successCallBack(data, status, headers, config) {
			console.log(data);
			uc.people = data.data;
		};
		function errorCallBack(data, status, headers, config) {
			console.log(data);
		};
	};

	// phone filter
	angular.module('myApp').filter('PhoneFilter', PhoneFilterFuntion);

	function PhoneFilterFuntion() {
		return function (phoneString) {
			var resultPhoneString = '';
			if (phoneString.length == 10) {
				// (123) 456-7890
				resultPhoneString = '(' + phoneString.substring(0, 3) + ') ' + phoneString.substring(3, 6) + '-' + phoneString.substring(6);
			} else {
				resultPhoneString = '(' + phoneString.substring(0, 3) + ') ' + phoneString.substring(3, 6) + '-' + phoneString.substring(6);
			}
			return resultPhoneString;
		};
	};

})();
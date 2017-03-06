(function () {
	'use strict';

	angular.module('myApp', ['ngMessages']);
	angular.module('myApp').controller('UserCtrl', UserController);

	function UserController() {
		var uc = this;
		uc.name = 'Angular Forms';
	};

})();
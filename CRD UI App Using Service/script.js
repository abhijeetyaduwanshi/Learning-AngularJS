(function () {
	'use strict';

	angular.module('myApp', []);

	angular.module('myApp').controller('UserCtrl', UserController);

	UserController.$inject = ['DataService'];

	function UserController(DataService) {
		var usctrl = this;
		usctrl.name = "Angular UI App";

		console.log(DataService);

		usctrl.people = DataService.people;

		usctrl.addPerson = function () {
			DataService.addPerson(usctrl.newPerson);
			console.log(usctrl.people);
			usctrl.newPerson = null;
		};

		usctrl.deletePerson = function (index) {
			DataService.deletePerson(index);
			console.dir(usctrl.people);
		};
	}

	angular.module('myApp').factory('DataService', DataService);
	function DataService() {
		var self = {}, counter = 11;

		self.people = [{
			"id": 1,
			"firstName": "Leanne",
			"lastName": "Graham",
			"email": "Sincere@april.biz",
			"phone": "1-770-736-8031 x56442",
			"city": "Gwenborough"
		},
		{
			"id": 2,
			"firstName": "Ervin",
			"lastName": "Howell",
			"email": "Shanna@melissa.tv",
			"phone": "010-692-6593 x09125",
			"city": "Wisokyburgh"
		},
		{
			"id": 3,
			"firstName": "Clementine",
			"lastName": "Bauch",
			"email": "Nathan@yesenia.net",
			"phone": "1-463-123-4447",
			"city": "McKenziehaven"
		},
		{
			"id": 4,
			"firstName": "Patricia",
			"lastName": "Lebsack",
			"email": "Julianne.OConner@kory.org",
			"phone": "493-170-9623 x156",
			"city": "South Elvis"
		},
		{
			"id": 5,
			"firstName": "Chelsey",
			"lastName": "Dietrich",
			"email": "Lucio_Hettinger@annie.ca",
			"phone": "(254)954-1289",
			"city": "Roscoeview"
		},
		{
			"id": 6,
			"firstName": "Dennis",
			"lastName": "Schulist",
			"email": "Karley_Dach@jasper.info",
			"phone": "1-477-935-8478 x6430",
			"city": "South Christy"
		},
		{
			"id": 7,
			"firstName": "Kurtis",
			"lastName": "Weissnat",
			"email": "Telly.Hoeger@billy.biz",
			"phone": "210.067.6132",
			"city": "Howemouth"
		},
		{
			"id": 8,
			"firstName": "Nicholas",
			"lastName": "Runolfsdottir",
			"email": "Sherwood@rosamond.me",
			"phone": "586.493.6943 x140",
			"city": "Aliyaview"
		},
		{
			"id": 9,
			"firstName": "Glenna",
			"lastName": "Reichert",
			"email": "Chaim_McDermott@dana.io",
			"phone": "(775)976-6794 x41206",
			"city": "Bartholomebury"
		},
		{
			"id": 10,
			"firstName": "Clementina",
			"lastName": "DuBuque",
			"email": "Rey.Padberg@karina.biz",
			"phone": "024-648-3804",
			"city": "Lebsackbury"
		}];

		self.log = function () {
			for (var i = 0; i < self.people.length; i++) {
				console.log(self.people[i].email);
			}
		};

		self.addPerson = function (newPerson) {
			newPerson.id = counter++;
			self.people.push(newPerson);
		}

		self.deletePerson = function (index) {
			self.people.splice(index, 1);
		}
		return self;
	}
})();
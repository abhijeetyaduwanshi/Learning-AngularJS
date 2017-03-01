(function () {
	'use strict';

	angular.module('myApp', []).run(function () {
		console.log('app init');
	});

	angular.module('myApp').controller('UserCtrl', UserController);

	function UserController() {
		var usctrl = this;
		usctrl.people = [
			{
				"id": 1,
				"name": "Leanne Graham",
				"email": "Sincere@april.biz",
				"phone": "1-770-736-8031 x56442"
			},
			{
				"id": 2,
				"name": "Ervin Howell",
				"email": "Shanna@melissa.tv",
				"phone": "1-463-123-4447"
			},
			{
				"id": 3,
				"name": "Patricia Lebsack",
				"email": "Julianne.OConner@kory.org",
				"phone": "493-170-9623 x156"
			},
			{
				"id": 4,
				"name": "Chelsey Dietrich",
				"email": "Lucio_Hettinger@annie.ca",
				"phone": "(254)954-1289"
			},
			{
				"id": 5,
				"name": "Mrs. Dennis Schulist",
				"email": "Karley_Dach@jasper.info",
				"phone": "1-477-935-8478 x6430"
			},
			{
				"id": 6,
				"name": "Kurtis Weissnat",
				"email": "Telly.Hoeger@billy.biz",
				"phone": "210.067.6132"
			},
			{
				"id": 7,
				"name": "Nicholas Runolfsdottir V",
				"email": "Sherwood@rosamond.me",
				"phone": "586.493.6943 x140"
			},
			{
				"id": 8,
				"name": "Glenna Reichert",
				"email": "Chaim_McDermott@dana.io",
				"phone": "(775)976-6794 x41206"
			},
			{
				"id": 9,
				"name": "Clementina DuBuque",
				"email": "Rey.Padberg@karina.biz",
				"phone": "024-648-3804"
			}
		];

		usctrl.addPerson = function () {
			usctrl.newperson.id = ((usctrl.people.length) + 1);
			usctrl.people.push(usctrl.newperson);
			console.dir(usctrl.people);
			usctrl.newperson = null;
		};

		usctrl.deletePerson = function (location) {
			usctrl.people.splice(location, 1);
			console.dir(usctrl.people);
		}
	}
})();
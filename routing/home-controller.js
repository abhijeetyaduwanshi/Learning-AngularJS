(function () {
    'use strict';

    angular.module('myApp').controller('HomeCtrl', HomeController);

    function HomeController() {
        var hctrl = this;
        console.log("home controller is pulled");
    }
})();
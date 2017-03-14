(function () {
    'use strict';

    angular.module('myApp').controller('ProfileCtrl', ProfileController);

    function ProfileController() {
        var pctrl = this;
        console.log("profile controller is pulled");
    }
})();
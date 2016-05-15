angular.module('app').controller('orderNavigationController', function () {

    var vm = this;
    vm.currentStep = 1;

    vm.isStepActive = function (step) {
        return vm.currentStep == step;
    };

    vm.openStep = function (step) {
        vm.currentStep = step;
    };

});
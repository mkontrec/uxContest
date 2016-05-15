angular.module('app').controller('orderFormController', function () {

    var vm = this;
    var currentStep = 1;

    vm.isStepActive = function (step) {
        return currentStep == step;
    };

    vm.openStep = function (step) {
        currentStep = step;
    };

});
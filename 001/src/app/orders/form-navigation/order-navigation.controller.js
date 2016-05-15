angular.module('app').controller('orderNavigationController', function (orderFactory) {

    var vm = this;
    vm.currentStep = 1;

    vm.isStepActive = function (step) {
        return vm.currentStep == step;
    };

    vm.openStep = function (step) {
        vm.currentStep = step;
    };

    vm.shouldStepBeDisabled = function (step) {
      switch (step)
      {
          case 2:
              return orderFactory.data.selectedCup == null;
          case 3:
              return orderFactory.data.selectedCup == null;
          case 4:
              return orderFactory.data.selectedCup == null ||
                      orderFactory.data.selectedBilling == null;
      }
    };

});
angular.module('app').controller('step1Controller', function (orderFactory) {

    var vm = this;

    vm.cups = orderFactory.cups;

    vm.selectCup = function (cup) {
        if(vm.isCupSelected(cup))
        {
            return orderFactory.data.selectedCup = undefined;
        }

        return orderFactory.data.selectedCup = cup;
    };

    vm.isStepValid = function()
    {
      return orderFactory.data.selectedCup != undefined;
    };

    vm.isCupSelected = function(cup)
    {
        return orderFactory.data.selectedCup == cup;
    };



});
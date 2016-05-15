angular.module('app').controller('step2Controller', function (orderFactory) {

    var vm = this;

    vm.quantity = orderFactory.data.quantity;

    vm.sub = function (amount) {
        if (vm.quantity - amount < 1) {
            orderFactory.data.quantity = 1;
            return vm.quantity = 1;
        }
        orderFactory.data.quantity = vm.quantity;
        vm.quantity -= amount;
    };

    vm.add = function (amount) {
        vm.quantity += amount;
        orderFactory.data.quantity = vm.quantity;

    };

    vm.onQuantityChange = function () {
        if (vm.quantity < 1) {
            vm.quantity = 1;
        }

        orderFactory.data.quantity = vm.quantity;
    }
});
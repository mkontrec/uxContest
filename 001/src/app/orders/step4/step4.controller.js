angular.module('app').controller('step4Controller', function ($timeout, $rootScope, orderFactory) {

    var vm = this;

    vm.loadingState = 0;

    vm.form = {};

    vm.onDiscountCodeChange = function (input) {
        orderFactory.data.discountCode = null;

        if(!input)
        {
            return vm.loadingState = 0;
        }
        vm.loadingState = 1;

        $timeout(function () {
            vm.loadingState = 2;
            orderFactory.data.discountCode = input;
        }, 1000)
    };

    vm.confirmOrder = function () {
        $rootScope.$broadcast('order.completed', {});
    }
});
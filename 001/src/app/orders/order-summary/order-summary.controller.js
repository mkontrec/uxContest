angular.module('app').controller('orderSummaryController', function (orderFactory) {

    var vm = this;

    vm.data = orderFactory.data;

});
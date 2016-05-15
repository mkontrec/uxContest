angular.module('app').controller('MainController', function ($rootScope) {

    var vm = this;
    vm.showForm = true;

    $rootScope.$on('order.completed', function () {
        vm.showForm = false;
    });

});
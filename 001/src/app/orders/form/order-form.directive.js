angular.module('app').directive('uxOrderForm', function(){

    return {
        restrict: 'E',
        controller: 'orderFormController',
        controllerAs: 'orderFormCtrl',
        templateUrl: 'templates/order-form.directive.html'
    }

});
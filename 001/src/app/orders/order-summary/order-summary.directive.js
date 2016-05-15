angular.module('app').directive('uxOrderSummary', function(){

    return {
        restrict: 'E',
        controller: 'orderSummaryController',
        controllerAs: 'orderSummaryCtrl',
        templateUrl: 'templates/order-summary.directive.html'
    }

});
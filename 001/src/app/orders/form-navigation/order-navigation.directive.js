angular.module('app').directive('uxOrderNavigation', function(){

    return {
        restrict: 'E',
        controller: 'orderNavigationController',
        controllerAs: 'orderNavigationCtrl',
        templateUrl: 'templates/order-navigation.directive.html'
    }

});
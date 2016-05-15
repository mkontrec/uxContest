angular.module('app').directive('uxStep1', function(){

    return {
        restrict: 'E',
        controller: 'step1Controller',
        controllerAs: 'vm',
        templateUrl: 'templates/step1.directive.html'
    }

});
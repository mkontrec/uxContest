angular.module('app').directive('uxStep1', function(){

    return {
        restrict: 'E',
        controller: 'step1Controller',
        controllerAs: 'step1Ctrl',
        templateUrl: 'templates/step1.directive.html'
    }

});
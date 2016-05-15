angular.module('app').directive('uxStep2', function(){

    return {
        restrict: 'E',
        controller: 'step2Controller',
        controllerAs: 'step2Ctrl',
        templateUrl: 'templates/step2.directive.html'
    }

});
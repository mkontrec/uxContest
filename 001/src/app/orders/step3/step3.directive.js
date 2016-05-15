angular.module('app').directive('uxStep3', function () {

    return {
        restrict: 'E',
        controller: 'step3Controller',
        controllerAs: 'step3Ctrl',
        templateUrl: 'templates/step3.directive.html'
    }

});
angular.module('app').directive('uxCup', function(){

    return {
        restrict: 'E',
        scope: {cup:'='},
        controller: function(){},
        controllerAs: 'cupCtrl',
        templateUrl: 'templates/cup.directive.html'
    }

});
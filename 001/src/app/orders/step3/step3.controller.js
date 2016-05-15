angular.module('app').controller('step3Controller', function (orderFactory, $scope) {

    var vm = this;
    var typeIsPassword = true;

    vm.form = {};

    vm.isStepValid = function (form) {
        return form.$valid;
    };

    vm.getPasswordType = function () {
        if(typeIsPassword)
        {
            return 'password';
        }

        return 'text';
    };

    vm.togglePasswordType = function () {
        typeIsPassword = !typeIsPassword;
    };
    
    vm.onFormChange = function (form) {
        if(form.$valid)
        {
            return  orderFactory.data.selectedBilling = vm.form;
        }
        
        return orderFactory.data.selectedBilling = null;
    };

});
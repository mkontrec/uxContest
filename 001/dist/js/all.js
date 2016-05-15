angular.module("app",[]),angular.module("app").controller("MainController",["$rootScope",function(t){var e=this;e.showForm=!0,t.$on("order.completed",function(){e.showForm=!1})}]),angular.module("app").controller("orderFormController",function(){var t=this,e=1;t.isStepActive=function(t){return e==t},t.openStep=function(t){e=t}}),angular.module("app").directive("uxOrderForm",function(){return{restrict:"E",controller:"orderFormController",controllerAs:"orderFormCtrl",templateUrl:"templates/order-form.directive.html"}}),angular.module("app").controller("orderNavigationController",["orderFactory",function(t){var e=this;e.currentStep=1,e.isStepActive=function(t){return e.currentStep==t},e.openStep=function(t){e.currentStep=t},e.shouldStepBeDisabled=function(e){switch(e){case 2:return null==t.data.selectedCup;case 3:return null==t.data.selectedCup;case 4:return null==t.data.selectedCup||null==t.data.selectedBilling}}}]),angular.module("app").directive("uxOrderNavigation",function(){return{restrict:"E",controller:"orderNavigationController",controllerAs:"orderNavigationCtrl",templateUrl:"templates/order-navigation.directive.html"}}),angular.module("app").factory("orderFactory",function(){var t={quantity:100},e=[{name:"Cup 1000ml",price:.4,volume:1e3,img:"http://papperskopp.com/wp-content/uploads/2015/03/12oz_cof.jpg"},{name:"Cup 500ml",price:.3,volume:500,img:"http://papperskopp.com/wp-content/uploads/2015/03/8oz_cof.jpg"},{name:"Cup 250ml",price:.15,volume:250,img:"http://papperskopp.com/wp-content/uploads/2015/11/4oz_cof.jpg"}];return{data:t,cups:e}}),angular.module("app").controller("orderSummaryController",["orderFactory",function(t){var e=this;e.data=t.data}]),angular.module("app").directive("uxOrderSummary",function(){return{restrict:"E",controller:"orderSummaryController",controllerAs:"orderSummaryCtrl",templateUrl:"templates/order-summary.directive.html"}}),angular.module("app").controller("step1Controller",["orderFactory",function(t){var e=this;e.cups=t.cups,e.selectCup=function(r){return e.isCupSelected(r)?t.data.selectedCup=void 0:t.data.selectedCup=r},e.isStepValid=function(){return void 0!=t.data.selectedCup},e.isCupSelected=function(e){return t.data.selectedCup==e}}]),angular.module("app").directive("uxStep1",function(){return{restrict:"E",controller:"step1Controller",controllerAs:"vm",templateUrl:"templates/step1.directive.html"}}),angular.module("app").controller("step2Controller",["orderFactory",function(t){var e=this;e.quantity=t.data.quantity,e.sub=function(r){return e.quantity-r<1?(t.data.quantity=1,e.quantity=1):(t.data.quantity=e.quantity,void(e.quantity-=r))},e.add=function(r){e.quantity+=r,t.data.quantity=e.quantity},e.onQuantityChange=function(){e.quantity<1&&(e.quantity=1),t.data.quantity=e.quantity}}]),angular.module("app").directive("uxStep2",function(){return{restrict:"E",controller:"step2Controller",controllerAs:"step2Ctrl",templateUrl:"templates/step2.directive.html"}}),angular.module("app").controller("step3Controller",["orderFactory","$scope",function(t,e){var r=this,o=!0;r.form={},r.isStepValid=function(t){return t.$valid},r.getPasswordType=function(){return o?"password":"text"},r.togglePasswordType=function(){o=!o},r.onFormChange=function(e){return e.$valid?t.data.selectedBilling=r.form:t.data.selectedBilling=null}}]),angular.module("app").directive("uxStep3",function(){return{restrict:"E",controller:"step3Controller",controllerAs:"step3Ctrl",templateUrl:"templates/step3.directive.html"}}),angular.module("app").controller("step4Controller",["$timeout","$rootScope","orderFactory",function(t,e,r){var o=this;o.loadingState=0,o.form={},o.onDiscountCodeChange=function(e){return r.data.discountCode=null,e?(o.loadingState=1,void t(function(){o.loadingState=2,r.data.discountCode=e},1e3)):o.loadingState=0},o.confirmOrder=function(){e.$broadcast("order.completed",{})}}]),angular.module("app").directive("uxStep4",function(){return{restrict:"E",controller:"step4Controller",controllerAs:"step4Ctrl",templateUrl:"templates/step4.directive.html"}}),angular.module("app").directive("uxCup",function(){return{restrict:"E",scope:{cup:"="},controller:function(){},controllerAs:"cupCtrl",templateUrl:"templates/cup.directive.html"}});
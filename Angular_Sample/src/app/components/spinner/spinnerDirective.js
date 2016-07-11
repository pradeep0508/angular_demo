module.exports = function (ngModule, angular) {
    ngModule.directive('spinner', spinnerFunction);

    function spinnerFunction() {
        var directive={
            templateUrl:'./components/spinner/spinnerPage.html',
            controller:'spinnerController',
            controllerAs:'spinnerVM',
            restrict:'E'
        }
        return directive;
    }

}
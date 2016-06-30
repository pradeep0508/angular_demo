module.exports = function (ngmodule, angular) {
    'use strict'

    ngmodule.config(['$stateProvider', function CalculatorConfig($stateProvider) {
        $stateProvider.state('myApp.calc', {
            url: "/calc",
            params:{
                loggedUser: "pradeep"
            },
            views: {
                'layout@': {
                    templateUrl: './components/calculator/calculatorPage.html',
                    controller: "CalculatorCtrl",
                    controllerAs:"calcVM"
                }
            }

        });
    }]);

}
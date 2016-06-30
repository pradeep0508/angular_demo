module.exports = (function (ngModule) {

    'use strict'

    ngModule.config([
        '$stateProvider',
        function workerConfig($stateProvider) {
            $stateProvider.state("myApp.worker", {
                url: "/worker",
                view: {
                    'home@': {
                        templateUrl: "./components/Worker/workerPage.html",
                        controller: "workerConfig"
                    }
                }

            })

        }]);
})
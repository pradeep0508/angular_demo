module.exports = (function (ngModule) {

    'use strict'

    ngModule.config([
        '$stateProvider',
        function workerConfig($stateProvider) {
            $stateProvider.state("myApp.worker", {
                url: "/worker",
                view: {
                    'layout@': {
                        templateUrl: "./components/Worker/workerPage.html",
                        controller: "workerCtrl",
                        contrllerAs: 'workerVM'
                    }
                }

            })

        }]);
})
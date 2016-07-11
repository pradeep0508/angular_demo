module.exports = (function (ngModule) {

    'use strict'

    ngModule.config(['$stateProvider', workerConfig]);

    function workerConfig($stateProvider) {
        $stateProvider.state("myApp.worker", {
            url: "/worker",
            views: {
                'layout@': {
                    templateUrl: "./components/Worker/workerPage.html",
                    controller:"workerCtrl",
                    controllerAs: "workerVM"
                }
            }
        })
    }
})
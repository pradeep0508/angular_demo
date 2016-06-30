module.exports = function (ngModule, angular) {

    'use strict'

    ngModule.config([
        '$stateProvider',
        function moviesConfig($stateProvider) {
            $stateProvider.state("myApp.bootstrap", {
                url: "/bootstrap",
                views: {
                    'layout@': {
                        templateUrl: "./components/bootstrap/bootstrapPage.html",
                    }
                }
            }).state('myApp.cssDesign', {
                url: '/cssDesign',
                views: {
                    'layout@': {
                        templateUrl: './components/bootstrap/cssDesignPage.html'
                    }
                }
            })

        }]
    )

}
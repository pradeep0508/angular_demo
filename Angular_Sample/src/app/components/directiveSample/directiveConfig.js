module.exports = function (ngModule, angular) {

    'use strict'

    ngModule.config([
        '$stateProvider',
        function moviesConfig($stateProvider) {
            $stateProvider.state("myApp.direct", {
                url: "/direct",
                views: {
                    'layout@': {
                        templateUrl: "./components/directiveSample/directivePage.html",
                        controller: "directiveCtrl",
                        controllerAs: "directiveVM"
                    }
                }

            })

        }]
    )

}
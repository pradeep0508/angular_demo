module.exports = function (ngmodule, angular) {
    'use strict'

    ngmodule.config(['$stateProvider', function angularConfig($stateProvider) {
        $stateProvider.state('myApp.angular', {
            url: "/angular",
            views: {
                'layout@': {
                    templateUrl: './components/angularSamples/angularPage.html',
                    controller: "angularCtrl",
                    controllerAs: "angularVM",
                    resolve: {
                        sampleResolve: function () {
                            return { sampleResolveVal: 10000 };
                        }
                    },
                    data:{
                        customData1:"customData1",
                        customData2:"customData2"
                    }
                }
            }

        }).state('myApp.resolve', {
            url: "/resolve",
            views: {
                'layout@': {
                    templateUrl: './components/angularSamples/resolveSample/resolvePage.html',
                    controller: "resolveCtrl",
                    controllerAs: "resolveVM"
                }
            }

        }).state('myApp.table', {
            url: "/table",
            views: {
                'layout@': {
                    templateUrl: './components/angularSamples/components/tablePage.html',
                }
            }
        }).state('myApp.lodash', {
            url: "/lodash",
            views: {
                'layout@': {
                    templateUrl: './components/angularSamples/components/lodash/lodashPage.html',
                    controller: 'lodashCtrl',
                    controllerAs: 'lodashVM'
                }
            }
        });
    }]);

}

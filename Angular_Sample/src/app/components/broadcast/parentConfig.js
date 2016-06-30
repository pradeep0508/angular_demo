module.exports = function (ngmodule, angular) {
    'use strict'

    ngmodule.config(['$stateProvider', function broadcastConfig($stateProvider) {
        $stateProvider.state('myApp.parent', {
            url: "/parent",
            views: {
                'layout@': {
                    templateUrl: './components/broadcast/parentPage.html',
                    controller: "parentCtrl",
                    controllerAs: "parentVM"
                }
            }
        }, {
                url: '/cssdesign',
                views: {
                    'secondchild@myApp.parent': {
                        templateUrl: './components/broadcast/secondChild/secondChildPage.html',
                        controller: "secondChildCtrl",
                        controllerAs: "secondChildVM"
                    }
                }
            });
    }]);

}
module.exports = function (myApp) {

    myApp.config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state('myApp', {
                url: '',
                views: {
                    'layout': {
                        templateUrl: 'components/home/home.html',
                        controller: 'homeCtrl',
                        controllerAs: "homeVM"
                    },
                    'header': {
                        templateUrl: 'shared/views/header.html'
                    }
                }
            });
        }
    ]);
};

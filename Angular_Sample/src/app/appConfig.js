module.exports = function (myApp) {

    

    myApp.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$httpProvider',
        function ($stateProvider, $urlRouterProvider,$httpProvider) {

            $httpProvider.interceptors.push('httpInterceptor');

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

module.exports= function(myApp) {
    myApp.config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('myApp', {
                url: '',
                views: {
                    'reactView': {
                        templateUrl: './angularComponents/reactPage/reactPage.html',
                        controller: 'reactController',
                        controllerAs: 'reactVM'
                    },
                    'angularView': {
                        templateUrl: './angularComponents/angularPage/angularPage.html',
                        controller: 'angularController',
                        controllerAs: 'angularVM'
                    }
                }
            });
        }
    ]);
}

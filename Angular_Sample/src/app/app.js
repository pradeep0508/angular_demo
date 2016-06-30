require('angular');
require('angular-ui-router');


require('./components/home')(angular);
require('./components/calculator')(angular);
require('./components/worker')(angular);
require('./components/imdbMovies')(angular);
require('./components/directiveSample')(angular);
require('./components/bootstrap')(angular);
require('./components/broadcast')(angular);
require('./components/angularSamples')(angular);

var myApp = angular.module("myApp",
    [
        'ui.router',
        'homeModule',
        'calcModule',
        'workerModule',
        'moviesModule',
        'directiveModule',
        'familyModule',
        'bootstrapModule',
        'angularModule'
    ]);

require('./appConfig')(myApp);
require('./shared/services/MathService')(myApp)
require('./shared/services/restService')(myApp)
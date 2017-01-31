
import angular from 'angular';
import uirouter from 'angular-ui-router';

var myApp = angular.module('myApp', ['ui.router']);

require('./appConfig.jsx')(myApp);
require('./angularComponents/angularPage/angularCtrl.jsx')(myApp);
require('./angularComponents/reactPage/reactCtrl.jsx')(myApp);
module.exports = function (angular) {

    'use strict'

    var ngModule = angular.module('spinnerModule', []);

    require('./spinnerDirective')(ngModule, angular);
    require('./spinnerController')(ngModule, angular);
}
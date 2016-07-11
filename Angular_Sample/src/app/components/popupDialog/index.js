module.exports = function (angular) {

    'use strict'

    var ngModule=angular.module('popupModule',[]);

    require('./popupController')(ngModule,angular);
    require('./popupDirective')(ngModule,angular);
}
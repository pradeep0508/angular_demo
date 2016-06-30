module.exports = function (angular) {

    'use strict'
    var ngModule = angular.module('homeModule', []);
    
    require('./homeCtrl')(ngModule, angular);
}

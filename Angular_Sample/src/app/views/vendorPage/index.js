module.exports = function (angular) {

    'use strict'

    var ngModule=angular.module('vendorModule',[]);

    require('./vendor.ctrl')(ngModule,angular);
    require('./vendor.config')(ngModule,angular);
}
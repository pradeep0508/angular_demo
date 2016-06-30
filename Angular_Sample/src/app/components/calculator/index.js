module.exports=function(angular) {
   
  'use strict'

  var ngModule=angular.module('calcModule',[]);
  
  require('./calculatorCtrl')(ngModule,angular);
  require('./calculatorService')(ngModule,angular);
  require('./calculatorConfig')(ngModule,angular);
  
}
module.exports=function(angular) {
  
  'use strict'

  var ngModule=angular.module('workerModule',[]);
  
  require('./workerCtrl')(ngModule,angular);
  require('./workerConfig')(ngModule,angular);
   
}
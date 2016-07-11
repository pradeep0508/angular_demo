module.exports=function(angular) {
  
  'use strict'
  
  var ngModule=angular.module('workerModule',[]);
  console.log('loading worker index');
  require('./workerCtrl')(ngModule,angular);
  require('./workerConfig')(ngModule,angular);
   
}
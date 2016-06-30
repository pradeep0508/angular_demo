module.exports=function(angular) {
   
  'use strict'

  var ngModule=angular.module('angularModule',[]);
  
  require('./angularConfig')(ngModule,angular);
  require('./angularController')(ngModule,angular);
  require('./resolveSample')(ngModule,angular);
  
}
module.exports=function(angular) {
  
  'use strict'

  var ngModule=angular.module('bootstrapModule',[]);
    
  require('./bootstrapConfig')(ngModule,angular);
}
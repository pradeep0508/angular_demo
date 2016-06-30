module.exports=function(angular) {
   
  'use strict'

  var ngModule=angular.module('familyModule',[]);
  
  require('./parentConfig')(ngModule,angular);
  require('./parentController')(ngModule,angular);
  require('./firstChild')(ngModule,angular);
  require('./secondChild')(ngModule,angular);
  
}
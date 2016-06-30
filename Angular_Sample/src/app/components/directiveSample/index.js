module.exports=function(angular) {
  
  'use strict'

  var ngModule=angular.module('directiveModule',[]);
    
  require('./directiveConfig')(ngModule,angular);
  require('./directiveCtrl')(ngModule,angular);
  require('./sampleDirective')(ngModule,angular);
     
}
module.exports=function(angular) {
  
  'use strict'

  var ngModule=angular.module('moviesModule',[]);
    
  require('./moviesConfig')(ngModule,angular);
  require('./moviesCtrl')(ngModule,angular);
  require('./movieDisplayDirective')(ngModule);
  require('./moviesService')(ngModule,angular);
  require("jquery");
     
}
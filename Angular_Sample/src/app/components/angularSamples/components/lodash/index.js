module.exports=function(ngModule,angular) {
   
  'use strict'

  require('./lodashController')(ngModule,angular);
  console.log('loaded lodash index ');
}
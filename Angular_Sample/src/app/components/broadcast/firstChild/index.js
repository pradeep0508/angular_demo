module.exports=function(ngModule,angular) {
   
  'use strict'
  
  require('./firstChildController')(ngModule,angular);
  require('./fistChild-directive')(ngModule,angular);
  
}
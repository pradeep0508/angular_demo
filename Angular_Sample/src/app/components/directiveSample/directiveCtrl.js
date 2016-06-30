module.exports=function(ngModule,angular){
    'use strict'

    ngModule.controller('directiveCtrl',['$scope',directiveController]);

    function directiveController($scope) {
        
            $scope.loadMoreData=function () {
                console.log('loading more data');
            }

            $scope.deleteData=function (chore) {
                console.log('deleting data' - chore);
            }

    }
}
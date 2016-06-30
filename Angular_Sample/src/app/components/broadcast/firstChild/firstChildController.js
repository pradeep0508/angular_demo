
module.exports = function (ngModule, angular) {

    ngModule.controller("firstChildCtrl", ['$scope', firstChildController]);

    function firstChildController($scope) {

        var firstChildVM = this;

        $scope.$on('passParentInfo', passParentinfo);

        function passParentinfo(event, data) {
            console.log(JSON.stringify(data)); // 'Some data'
        }

        $scope.$on('$destroy', function () {
            firstChildVM = null;
        });

        firstChildVM.done=function(childName){
            console.log('child name:'+ childName)
        }
    }
};


/*
1. $scope.$emit => Will fire event up the $scope
2. $scope.$broadcast => will fire down the $scope
3. $scope.on => How we listen the  $scope
 */

module.exports = function (ngModule, angular) {

    ngModule.controller("secondChildCtrl", ['$scope', secondChildController]);

    function secondChildController($scope) {

        var secondChildVM = this;
        $scope.$on('passParentInfo', passParentinfo);

        function passParentinfo(event, data) {
            secondChildVM.fatherName = data.fatherName; // 'Some data'
            secondChildVM.motherName = data.motherName;
        }

        secondChildVM.passChildInfo = function () {
            console.log('scope.emit loaded');
            var childJson = { childName: secondChildVM.childName };
            $scope.$emit('passChildInfo', childJson);
        }


    }
};


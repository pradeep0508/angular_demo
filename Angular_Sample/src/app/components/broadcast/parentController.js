/*
1. $scope.$emit => Will fire event up the $scope
2. $scope.$broadcast => will fire down the $scope
3. $scope.on => How we listen the  $scope
 */

module.exports = function (ngModule, angular) {

    ngModule.controller("parentCtrl", ['$scope', parentController]);

    function parentController($scope) {

        var parentVM = this;

        $scope.$on('passChildInfo', passChildInfo);

        parentVM.passParentInfo = function () {
            var parentInfo = { fatherName: parentVM.fatherName, motherName: parentVM.motherName };
            $scope.$broadcast('passParentInfo', parentInfo);
        }

        parentVM.childName = function (childName) {
            console.log('directive child name:' + childName);
        }
        function passChildInfo(event, data) {
            console.log('scope.emit catched' + JSON.stringify(data));
            parentVM.childName=data.childName;
        }

    }
};


module.exports = function (ngModule, angular) {

    ngModule.controller("workerCtrl", function ($scope, CalculatorService) {
        $scope.doSquare = function () {
            $scope.answer = CalculatorService.square($scope.number);
        }

        $scope.doCube = function () {
            $scope.answer = CalculatorService.cube($scope.number);
        }
    });
}

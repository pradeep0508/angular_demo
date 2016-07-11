module.exports = function (ngModule, angular) {

    ngModule.controller('spinnerCtrl', ['$scope', 'RestClient', spinnerController]);

    function spinnerController($scope, RestClient) {
        var spinnerVM = this;

        spinnerVM.isEnableSpinning = isEnableSpinning();

        $scope.$watch(isEnableSpinning, setSpinnerStatus);

        function isSpinnerShowing() {
            //return RestClient.isRequesting();
        }

        function setSpinnerStatus(newValue, oldValue) {
            spinnerVM.isEnableSpinning = newValue;
        }

    }

}
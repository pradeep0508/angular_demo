module.exports = function (ngModule, angular) {
    ngModule.controller('popupCtrl', ['$scope', popupController]);

    function popupController($scope) {

        var popupVM = this;

        $scope.$on('showPopup',showDialog);

        function showDialog(event,param){

            console.log('received: popup from directive');
        }

    }

}
module.exports = function (ngModule, angular) {
    ngModule.controller("angularCtrl", ['$scope', 'sampleResolve', '$state', angularController]);

    function angularController($scope, sampleResolve, $state) {
        var angularVM = this;
        var undefiedValue = 'pradeep';
        angularVM.modules = [
            { appState: "myApp.resolve", statePage: "resolve Sample" }
        ];

        angular.extend(angularVM, {
            validateObject: function () {
                alert('Object defied status: ' + angular.isDefined(undefiedValue));
            },
            validateFunction: function () {
                alert('Object defied status: ' + angular.isFunction('{{pradeep}}'));
            },
            showResolveValue: function () {
                alert('Resolve value' + sampleResolve.sampleResolveVal);
            },
            showResolveCustomValue: function () {
                alert('Resolve value' + $state.custom.data);
            },
            navigateToTable() {
                $state.go('myApp.table', {});
            },
            navigateToLodash() {
                $state.go('myApp.lodash', {});
            },
            loadPopupDialog() {
                console.log('calling emit function');
                var params;
                $scope.$emit('showPopup', params)
            }

        });

    }
}


import { store, dispatch } from 'ReduxStore'
var actions = require('Action')

module.exports = function (myApp) {

    myApp.controller('angularController', ['$scope', angularController]);

    function angularController($scope) {
        var angularVM = this;
        angularVM.InputValue = 'React input';
        angularVM.sendInputToReactComp = sendInputToReactComp;
        
        //it will notify whenever state changed.
        store.subscribe(() => {
            var state = store.getState();
            angularVM.reduxStoreValue = state.inputText;
            if (!$scope.$$phase) {
                $scope.$apply(angularVM.reduxStoreValue);
            }
        });

        //onClick event
        function sendInputToReactComp() {
            store.dispatch(actions.setInputText(angularVM.InputValue));
        }
    }
}

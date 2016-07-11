module.exports = function (ngModule, angular) {

    'use strict'

    ngModule.directive('popupDialog', [popupDirective]);

    function popupDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: './components/popupDialog/popupPage.html',
            controller: 'popupCtrl',
            controllerAs: 'popupVM'
        }
        return directive;

        // function linkFunc(scope, elem, attrs) {
        //     scope.YesClicked = yesClicked;

        //     function yesClicked() {
        //         alert('Yes Clicked');
        //     }
        // }
    }
}
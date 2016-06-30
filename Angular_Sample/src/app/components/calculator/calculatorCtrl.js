module.exports = function (ngModule, angular) {

    ngModule.controller("CalculatorCtrl", ['CalculatorService', '$stateParams', function (CalculatorService, $stateParams) {

        var calcVM = this;

        var pageId = $stateParams.loggedUser;

        calcVM.onNumberKeyUp = onNumberKeyUp;

        calcVM.doSquare = function () {
            if (doValidate()) {
                calcVM.answer = CalculatorService.square(calcVM.inputNumber);
            }
        }

        calcVM.doCube = function () {
            if (doValidate()) {
                calcVM.answer = CalculatorService.cube(calcVM.inputNumber);
            }
        }

        function onNumberKeyUp(event) {
            if ($(".form-control").hasClass('has-error')) {
                console.log('keyup fired' + event);
            }
        }

        function doValidate() {
            var isValidateReponse = true;
            calcVM.isNumberInValid = false;
            if (calcVM.inputNumber === undefined) {
                calcVM.isNumberInValid = true;
                isValidateReponse = false
            }
            return isValidateReponse;
        }
    }]);
}


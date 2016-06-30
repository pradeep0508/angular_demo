module.exports = function (ngModule, angular) {

    ngModule.directive('firstChild', firsChildDirective);

    function firsChildDirective() {
        return {
            restrict: 'E',
            controller:'firstChildCtrl as firstChildVM',
            replace:true,
            scope:{
                done: '&'
            },
            template:'<div><br><input type="text" ng-model="childranName" class="form-control">{{childranName}}' 
            + '<input type="button" ng-click="done({childranName})" value="fist child controller button"></button></div>'
            
        }

    }

}
module.exports = (function (ngModule) {

    'use strict'
    ngModule.directive('movieContainer', function(){
        console.log('movieContainer directive');
        return {
            restrict: 'E',
            template:'<h2>Pradeep first directive sample</h2>'
        }
    });

})
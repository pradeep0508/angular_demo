module.exports = function(ngModule, angular) {

    ngModule.controller("resolveCtrl", ['$scope','$q', resolveController]);

    function resolveController($scope,$q) {
        var resolveVM=null;
        var defer=$q.defer();
        defer.promise.then(function(funcLevel){
            alert(funcLevel + ' defer function');
            return 'Second';
        }).then(function(funcLevel) {
            alert(funcLevel + ' defer function');
        });
        defer.resolve('first');
        
    }
}
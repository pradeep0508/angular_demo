module.exports = function (ngModule, angular) {
    ngModule.controller('vendorCtrl', vendorController);

    vendorController.$inject['$scope']

    function vendorController($scope) {
        var VM = this;

    }

}
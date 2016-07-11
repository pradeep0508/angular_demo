module.exports = function (ngModule, angular) {

    ngModule.controller('tableCtrl', ['$scope', tableController]);

    function tableController($scope) {

        var tableVM = this;

        tableVM.reportData = [{ name: 'pradeep1', company: "photon" },
            { name: 'pradeep6', company: "photon" }]

        tableVM.pushReportData = function () {
            tableVM.reportData.push({ name: tableVM.name, company: tableVM.company });
        }

        tableVM.reportItemClick = function (item) {
            tableVM.name = item.name;
            tableVM.company = item.company;
        }

        function onNumberKeyUp(event) {
            if ($(".form-control").hasClass('has-error')) {
                console.log('keyup fired' + event);
            }
        }

    }

}
module.exports = function (ngModule, angular) {

    ngModule.controller('workerCtrl', ['$scope', workerController]);

    function workerController($scope, Webworker) {
        // var workerVM = this;

        // // function that will become a worker
        // function doubler(num) {
        //     // the return value becomes the resolve of the promise
        //     return num * 2;
        // }

        // var myWorker = Webworker.create(doubler);

        // myWorker.run($scope.value).then(function (result) {
        //     alert("Answer: " + result);
        // });
    }

}
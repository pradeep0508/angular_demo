module.exports = function (ngModule, angular) {

    ngModule.controller('workerCtrl', ['$scope', workerController]);
    var myName = 'pradeep';
    function workerController($scope, Webworker) {
        const API_KEY = {};
        API_KEY.name = 'pradeep';
        console.log(jsFunction('sample js function', 'pradeep'));
        console.log(arrowFunction('sample arrow function', 'pradeep'));
        console.log(deliveryBoy.receive('sample arrow function', 'pradeep'));
    }

    var jsFunction = function(msg, name) { 
        return '######################' + name + msg;
    }

    var arrowFunction = (msg, name) => {
        return '>>>>>>>>>>>>>>>>>>' + myName;
    }

    var deliveryBoy = {
        name: 'this context',
        handleMsg: function(msg) {
            var that = this;
            console.log('delivery boy name:' + that.name)
        },
        receive: function() {
            this.arrowHandlemsg('Hello', (msg) => {
                console.log('arrow function==>' + name);
            })
        }
    }


}
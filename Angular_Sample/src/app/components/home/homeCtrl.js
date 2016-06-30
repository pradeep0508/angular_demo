module.exports = function (ngModule, angular) {

    ngModule.controller('homeCtrl', ['$scope',homeController]);

    function homeController($scope) {
        
        var homeVM=this;
        
        homeVM.modules = [
            { appState: "myApp.calc({loggedUser:'pradeep'})", statePage: "Calculator Sample" },
            { appState: "myApp.worker", statePage: "Web Worker Sample" },
            { appState: "myApp.movies", statePage: "IMDB Movie Info" },
            { appState: "myApp.direct", statePage: "Sample directives" },
            { appState: "myApp.bootstrap", statePage: "Bootstrap Samples" },
            { appState: "myApp.parent", statePage: "broadcastModule Samples" },
            { appState: "myApp.angular", statePage: "angular Samples" }
        ];
    }

};

module.exports = (function (ngModule) {

    'use strict'

    ngModule.config([
        '$stateProvider',
        function moviesConfig($stateProvider) {
            $stateProvider.state("myApp.movies", {
                url: "/movies",
                views: {
                    'layout@': {
                        templateUrl: "./components/imdbMovies/moviesPage.html",
                        controller: "MoviesCtrl",
                        controllerAs: "moviesVM"
                    }
                }
            })
        }]
    )
})
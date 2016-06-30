module.exports = function (ngModule, angular) {
    'use strict'
    ngModule.controller("MoviesCtrl", ['$scope', 'MovieService', MoviesController]);

    function MoviesController($scope, MovieService) {

        var moviesVM = this;

        var MovieList = MovieService.getMoviesInfoByName('batman').then(successCallback, errorCallback);

        function successCallback(response) {
            moviesVM.MoviesList = response.data;
        }

        function errorCallback(errorResponse) {
            moviesVM.MoviesList = errorResponse;
        }
    }


}

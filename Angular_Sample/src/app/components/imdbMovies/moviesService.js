module.exports = function (ngModule) {
    ngModule.service('MovieService',['restService',MovieServices] )

    function MovieServices(restService) {
        
        var movieServiceClient={
            getMoviesInfoByName:getMoviesListByName
        }
        return movieServiceClient;
        
        function getMoviesListByName(movieName) {
            var moviesListUrl="http://www.omdbapi.com/?s=" + movieName + "&page=1";
            return restService.get(moviesListUrl);
        }
    }
}


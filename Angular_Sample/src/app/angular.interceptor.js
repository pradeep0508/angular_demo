//http://www.webdeveasy.com/interceptors-in-angularjs-and-useful-examples/
module.exports = function (ngModule) {

    'use strict'

    ngModule.factory('httpInterceptor', ['$q', '$location', '$injector', '$rootScope', httpInterceptor]);

    function httpInterceptor($q) {

        var state;

        return {
            request: function (config) {
                //you can modify your response here
                //config.headers['x-session-token'] = SessionService.token;
                config.requestTimestamp = new Date().getTime();
                //console.log('Interceptor: request ==>' + config);
                return config;
            },
            response: function (response) {
                //you can modify your response here
                //var deferred = $q.defer();
                response.config.responseTimestamp = new Date().getTime();
                //deferred.resolve(response);
                //console.log('Interceptor: response ==>' + JSON.stringify(response));
                //return deferred.promise;
                return response;
            },
            responseError: function (response) {
                //you can decorate your error response
                //console.log('Interceptor: responseError ==>' + response);
                return response;
            }
        }



    }
}
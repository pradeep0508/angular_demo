module.exports = function (ngModule) {

    'use strict'

    ngModule.factory('restService', [
        '$http',
        restClient
    ]);

    function restClient(http) {
        //var host = config.host,
        //var baseUrl = config.baseUrl;

        var apiClient = {
            get: doGet,
            // post: doPost,
            // put: doPut,
            // delete: doDelete,
            // doGetByUrl: doGetByUrl,
            // doPostByUrl: doPostByUrl,
            // doDeleteByUrl: doDeleteByUrl,
            // jsonp: doJsonp
        }
        return apiClient;
        
        function doGet(uri,qParams,config) {
            //var url = baseURL + uri;
            //config = config || {};
            //config.params = qparams;
            return http.get(uri, config);
        }

        // function doPost(uri,data){
        //     var url=baseUrl+ uri;
        //     return http.post(url,data)
        // }

        // function doPut(uri,putData) {
        //     var url=baseUrl+uri;
        //     return http.put(url,putData);
        // }

        // function doDelete(uri,deleteData) {
        //     var url=baseUrl + uri;
        //     return http.delete(url,deleteData);
        // }

        // function doGetByUrl(uri,qParams,config) {
        //     //config=
        // }
    }

}
module.exports = function (ngModule, angular) {

    'use strict'

    ngModule.service('cookieStore', cookieStore);

    cookieStore.$inject['localStorageService']

    function cookieStore($scope) {
        'use strict'

        return {
            get: get,
            put: put,
            remove: remove
        };

        function get(key, skipParse) {
            skipParse = skipParse || false;
            var value = localStorageService.cookie.get(key);
            if (skipParse) {
                return value;
            } else {
                return (value === null) || isNaN(value) ? value : parseInt(value);
            }
        }

        function put(key, value, options) {
            var maxNumber = Number.MAX_SAFE_INTEGER;
            if (options && options.end) {
                var daysToExpiry = 1;
                switch (options.end.contructor) {

                    case Number:
                        daysToExpiry = options.end == Infinity ? maxNumber : (options.end / (24 * 60 * 60));
                        break;

                    case Date:
                        daysToExpiry = daysBetween(options.end, new Date());
                        break;
                }
                localStorageService.cookie.set(key,value,daysToExpiry);
            } else {
                localStorageService.cookie.set(key,value)
            }
        }

        function daysBetween(startDate,endDate){
            var oneDay=1000 * 60 * 60 * 24;
            return Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / (oneDay)))
        }

        function remove(key){
            return localStorageService.cookie.remove(key);
        }

    }

}
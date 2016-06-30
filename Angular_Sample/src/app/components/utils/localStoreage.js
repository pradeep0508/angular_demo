module.exports = function (ngModule, angular) {

    ngModule.factory('utilStorage', utilStorage);

    utilStorage.$inject['localStorageService']

    function utilStorage(localStorageService) {
        return {
            setItem:setItem,
            getItem:getItem,
            removeItem:removeItem,
            cookie:{
                set: localStorageService.cookie.set,
                get: localStorageService.cookie.get,
                remove: localStorageService.cookie.remove,
                getLegacy: getLegacy
            }
        };


        function setItem(key,valu){
            localStorageService.set(key,value);
        }

        function getItem(key){
            return localStorageService.get(key);
        }

        function getLegacy(key,skipParse){
            skipParse = skipParse || false;
            var value=localStorageService.cookie.get(key);
            if(skipParse){
                return value
            } else {
                return (value === null) || isNaN(value) ? value : parseInt(value);
            }
        }

    }

}
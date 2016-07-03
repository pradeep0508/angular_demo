module.exports = function (ngModule, angular) {

    ngModule.controller('lodashCtrl', ['$scope', lodashController]);

    function lodashController($scope) {

/*
        lodash documention
        https://lodash.com/docs#findIndex
*/
        var lodashVM = this;

        lodashVM.forSample = function () {
            _.times(5, function (item) {
                console.log('for loop index value: ' + item);
            })
        }

        lodashVM.jsonDeeplyNestedLoop = function () {
            // Fetch the name of the first pet from each owner
            var ownerArr = [{
                "owner": "Colin",
                "pets": [{ "name": "dog1" }, { "name": "dog2" }]
            },
                {
                    "owner": "John",
                    "pets": [{ "name": "dog3" }, { "name": "dog4" }]
                }
            ];

            ownerArr.map(function (owner) {
                console.log('Printing json arrow using JS Map:' + owner.pets[0].name);
            })

            _.map(ownerArr, function (item) {
                console.log(item);
                console.log(_.map(item, function (petItem) {
                    console.log(petItem);
                }))

            })

            var perNames = _.map(ownerArr, 'pets[0].name');
            console.log(perNames);
        }

        lodashVM.jsonDeepUniqueValues = function () {
            // Lodash
            var result = _.times(60, _.uniqueId.bind(null, 'ball_'));
            console.log(result);

            //rid of null using partial
            var result = _.times(60, _.partial(_.uniqueId, 'partial_'));
            console.log(result);
        }

        lodashVM.deepClone = function () {
            var objA = {
                "name": "colin"
            }

            var objB = _.cloneDeep(objA);

            console.log(objB === objA);
        }

        lodashVM.getRamdomNumber = function () {

            console.log('Random number between 10-20 ==>' + _.random(10, 20));
            console.log('Return random number between 0 to 20 ==>' + _.random(20));
            console.log('Return random floating numbers between 15 and 20 ==>' + _.random(15, 20, true));
        }

        lodashVM.lodashExten = function () {
            var objA = { "name": "colin", "car": "suzuki" };
            var objB = { "name": "james", "age": 17 };
            console.log(objA);
            console.log(objB);
            _.assign(objA, objB);
            console.log(objA);
        }

        lodashVM.fromObjFromJson = function () {
            var objA = { "name": "colin", "car": "suzuki", "age": 17 };
            console.log(objA);
            // Lodash
            objA = _.omit(objA, ['car', 'age']); // {"name": "colin"}
            console.log(objA);
            // Lodash
            var objA = { "name": "colin", "car": "suzuki", "age": 17 };
            console.log(objA);
            objA = _.omit(objA, 'car'); // {"name": "colin", "age": 17};
            console.log(objA);
            objA = _.omit(objA, _.isNumber); // {"name": "colin"};
            console.log(objA);
        }

        lodashVM.assignOneObjToAnotherObj = function () {
            var objA = { "name": "colin", "car": "suzuki", "age": 17 };
            console.log(objA);
            var objB = _.pick(objA, ['car', 'age']);
            console.log(objB)
        }

        lodashVM.selectRandomObj = function () {
            var luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];

            console.log(_.sample(luckyDraw))
            console.log(_.sample(luckyDraw, 2))
        }

        lodashVM.errorHandlingObj = function () {
          console.log(parseLodash('{"name": "colin"}')); // Return {"name": "colin"}
          
        }
        // With Lodash
        function parseLodash(str) {
            return _.attempt(JSON.parse.bind(null, str));
        }

    }
}
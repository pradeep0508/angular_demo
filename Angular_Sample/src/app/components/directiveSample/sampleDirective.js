module.exports = function (ngModule, angular) {

    //if no restriction the default value going to be 'A'

    ngModule.directive("firstDirective", function () {
        return {
            restrict: "E",
            replace: true,
            scope: {},
            template: '<div><h1> first angular directive</h1></div>'
        }
    })

    ngModule.directive('attrDirectory', function () {
        return {
            restrict: 'A', //M for comment
            link: function () {
                console.log('calling controller directive');
            }
        }
    })

    ngModule.directive('menterDirective', function () {
        return function (scope, element, attrs) {
            element.bind("mouseenter", function () {
                //console.log("I'm inside of you");
                element.addClass(attrs.menterDirective);
            })
        }
    })

    ngModule.directive('mleaveDirective', function () {
        return function (scope, element, attrs) {
            element.bind("mouseleave", function () {
                element.removeClass(attrs.menterDirective);
            })
        }
    })

    ngModule.directive('contTalk', function () {
        return function (scope, element, attrs) {
            element.bind("mouseenter", function () {
                //scope.loadMoreData();
                //scope.$apply("loadMoreData()");
                scope.$apply(attrs.contTalk);
            })
        }
    })

    //sample for two interactive contraller
    ngModule.directive("conOne", function () {

        return {
            restrict: "E",
            scope: {},
            controller: function ($scope) {
                $scope.abilities = [];

                this.addStength = function () {
                    $scope.abilities.push('Stength');
                }

                this.addSpeed = function () {
                    $scope.abilities.push('Speed');
                }

                this.addFlight = function () {
                    $scope.abilities.push('Flight');
                }
            },
            link: function (scope, element) {
                element.addClass("button");
                element.bind("mouseenter", function () {
                    console.log(scope.abilities);
                })
                console.log(scope.abilities);
            }
        }
    })

    ngModule.directive('stength', function () {
        return {
            require: "conOne",
            link: function (scope, element, attrs, firstCtrl) {
                firstCtrl.addStength();
            }
        }
    })
    ngModule.directive('speed', function () {
        return {
            require: "conOne",
            link: function (scope, element, attrs, firstCtrl) {
                firstCtrl.addSpeed();
            }
        }
    })

    ngModule.directive('flight', function () {
        return {
            require: "conOne",
            link: function (scope, element, attrs, firstCtrl) {
                firstCtrl.addFlight();
            }
        }
    })

    ngModule.directive('isoDirective', function () {
        return {
            restrict: "E",
            scope: {
                done: "&"
            },
            template: '<input type="text" ng-model="chore"  class="form-control">{{chore}}'
            + '<input type="button" ng-click="done({chore:chore})" value="controller client event from directive"></button>'
        }
    })

    ngModule.directive("fruits", function () {
        return {
            template: '<div>Displaying from directive: {{fruit}}</div>',
            scope:{
                fruit:'@'
            }           
        }
    })

    ngModule.directive("equalExpression", function () {
        return {
            scope:{
                value:'='
            },
            template: '<input type="text" ng-model="value"  class="form-control"><br>Directive value: {{value}}',           
        }
    })




}
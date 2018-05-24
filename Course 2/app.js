(function(){
"use strict";

angular.module("myFirstApp", [])

.controller("MyFirstController", function($scope) {
$scope.name = "Maxime";
$scope.sayHello = function (person) {
  return "Hello " + person + " !";
}
});

})();

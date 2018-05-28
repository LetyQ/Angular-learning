(function(){
"use strict";

angular.module("MsgApp", [])

.controller("MsgController", MsgController)
.filter("hungry", HungryFilter);

MsgController.$inject = ["$scope", "hungryFilter"];
function MsgController($scope, hungryFilter) {
  $scope.name = "William";
  $scope.stateOfBeing = "smiling";
  $scope.happinessCost = 420;

  $scope.sayMessage = function () {
    let msg = "William is happy";
    return msg;
  }
  $scope.sayHungryMessage = function () {
    let msg = "William is happy";
    msg = hungryFilter(msg);
    return msg;
  }

  $scope.tellJoke = function () {
  $scope.stateOfBeing = "laugh";
  }

}
function HungryFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("happy", "hungry");
    return input;
  };
}

})();

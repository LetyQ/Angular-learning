(function(){
"use strict";

angular.module("MsgApp", [])

.controller("MsgController", MsgController);

MsgController.$inject = ["$scope", "$filter"];
function MsgController($scope, $filter) {
  $scope.name = "William";
  $scope.stateOfBeing = "smiling";
  $scope.happinessCost = 420;

  $scope.sayMessage = function () {
    let msg = "William is happy";
    let output = $filter("uppercase")(msg);
    return output;
  }

$scope.tellJoke = function () {
  $scope.stateOfBeing = "laugh";
}

}

})();

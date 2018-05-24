(function(){
"use strict";

angular.module("NameCalculator", [])

.controller("NameCalculatorController", function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
    let totalNameValue = calculateNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };

  function calculateNumericForString(string) {
    let totalStringValue = 0;
    for (let letter in string) {
      totalStringValue += string.charCodeAt(letter);
    }

    return totalStringValue;
  }
})

})();

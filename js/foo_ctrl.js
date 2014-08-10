(function(){
  "use strict";
  angular.module("app").controller("fooCtrl", function($scope){
    $scope.dog="Max";
    $scope.dogName = function(){
      return $scope.dog;
    }
    $scope.num1="1";
    $scope.num2="1";
    $scope.numSum = function(){
    var sum = parseInt($scope.num1)+parseInt($scope.num2);
    if(sum+0 === sum)
      return sum;
    else
      return "Please enter a number!"
    }
   });
})();



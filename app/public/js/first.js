var app = angular.module('firstApp',[]);
app.controller('firstController', function ($scope) {
    $scope.first = 'Ragnar';
    $scope.last = 'Lodbrok';
    $scope.heading = "The king's message: ";
    $scope.updateMsg = function() {
        $scope.msg = "Hello, "+ $scope.first + " " + $scope.last;
    };
});
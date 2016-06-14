angular.module('myApp', []).controller('ctrl', function ($scope, $http) {
    $http.get("localhost:3000/users").success(function (data) {
        console.log("response",data);
    })
});
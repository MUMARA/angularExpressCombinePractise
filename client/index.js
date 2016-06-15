angular.module('myApp', []).controller('ctrl', function ($scope, $http) {
    $http.get("http://localhost:3000/users").success(function (msg) {
        console.log("response",msg);
    })
});
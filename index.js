angular.module('myApp', []).controller('ctrl', function ($scope, $http) {
    $http.get("a").success(function (data) {
        console.log("response",data);
    })
});
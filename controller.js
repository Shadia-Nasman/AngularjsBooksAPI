var app = angular.module("books", []);
app.controller("bookcontroller", function($scope, $http) {
    $http.get("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=RArQ4BcZtI5UhNXRySF4FwOWqRQStsKz").then(function(mydata) {
        $scope.books = mydata.data.results.lists;
        console.log($scope.books);
    });

});
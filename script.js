var app = angular.module("app", []);

app.controller('mainCtrl', function ($scope, $http, usersRetriever) {

    usersRetriever.getAllUsers().then(function (data) {
        $scope.users = data;
    }, function errorCallback(response) {
        console.log(response);
    });

    usersRetriever.getCountUsers().then(function (data) {
        $scope.usersCount = data;
    }, function errorCallback(response) {
        console.log(response);
    });

    // Add User function :
    $scope.createUser = function () {
        //$http POST request with shortcut method
        $http.post('https://trainee-api.pleiads.fr/users', $scope.newUser).then(function successCallback(response) {
            $scope.users.push(response.data);
            alert("User has been successfully created");
        }, function errorCallback(response) {
            alert("Error while creating user.. Try Again!");
            console.log(response);
        });
    };

    // Update User function :
    $scope.updateUser = function () {
        //$http PUT request with shortcut method
        $http.put('https://trainee-api.pleiads.fr/users/' + $scope.user.id, $scope.user).then(function successCallback(response) {
            $scope.user = response.data;
            console.log(response.data);
            alert("User has been successfully updated")
        }, function errorCallback(response) {
            alert("Error while updating user.. Please try again");
            console.log(response);
        });
    };


    // Delete User function :
    $scope.deleteUser = function (user) {
        //$http DELETE request with shortcut method
        $http.delete('https://trainee-api.pleiads.fr/users/' + user.id).then(function successCallback(response) {
            if (confirm("Are you sure?")) {
                alert("The user " + user.firstName + " has been successfully deleted");
            }
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);
        }, function errorCallback(response) {
            alert("Error while deleting user.. Please try Again");
            console.log(response);
        });
    };

    $scope.editUser = function (user) {
        $scope.user = user;
    };

});
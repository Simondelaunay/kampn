angular.module("app").factory("usersRetriever", function ($http) {

    function getAllUsers() {
        // GET All Users request :
        return $http({
            method: 'GET',
            url: 'https://trainee-api.pleiads.fr/users'
        }).then(function successCallback(response) {
            console.log('successsss', response.data);
            return response.data;
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    function getCountUsers() {
        // GET Users count request :
        return $http({
            method: 'GET',
            url: 'https://trainee-api.pleiads.fr/users/count'
        }).then(function successCallback(response) {
            console.log('success count', response.data);
            return response.data;
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    return {
        getAllUsers: getAllUsers,
        getCountUsers: getCountUsers
    }

});
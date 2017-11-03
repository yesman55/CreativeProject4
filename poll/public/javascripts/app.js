var app = window.angular.module('app', [])

app.factory('osfetcher', osfetcher)
app.controller('mainCtrl', mainCtrl)

function osfetcher ($http) {
    var API_ROOT = 'Windows_poll'
    return {
        get: function () {
        return $http
            .get(API_ROOT)
            .then(function (resp) {
            return resp.data
            })
        }
    }
}

function mainCtrl ($scope, osfetcher, $http, $interval) {
    // osfetcher.get()
    // .then(function (data) {
    //     OS = data
    // })

    $interval(function () {
        $http.get("OS")
        .then(function(response) {
            $scope.WindowsVotes = response.data[1];
            $scope.MacOSVotes = response.data[3];
            $scope.LinuxVotes = response.data[5];
        });
        
    }, 800);

    $scope.addVoteWindows = function() {
        $http.get("Windows_poll") 
        .then(function(response) {
            $scope.WindowsVotes = response.data;            
        });
    }
      $scope.addVoteMacOS = function() {
        $http.get("MacOS_poll") 
        .then(function(response) {
            $scope.MacOSVotes = response.data;            
        });
    }
      $scope.addVoteLinux = function() {
        $http.get("Linux_poll") 
        .then(function(response) {
            $scope.LinuxVotes = response.data;            
        });
    }   
}
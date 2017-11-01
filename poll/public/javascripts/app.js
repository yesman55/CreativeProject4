var app = window.angular.module('app', [])

app.factory('osfetcher', osfetcher)
app.controller('mainCtrl', mainCtrl)

function osfetcher ($http) {
    var API_ROOT = 'OS_poll'
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

function mainCtrl ($scope, osfetcher, $http) {
    $scope.addVote = function(osType) {
        // OS_poll[osType][vote] += 1;
        console.log("inaddVote");
    }
}

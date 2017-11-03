// var app = window.angular.module('app', []);
// app.controller('mainCtrl', function($scope, $http) {

//   $scope.addvote = function(OS_system) {
// 	if(OS_system == "Windows"){
//           $http.get('Windows_poll')
// 	  .then(function(res) {
//  	    $scope.WindowsVote = res.data;
// 	  });
//   	}
// 	if(OS_system == "MacOS"){
	
// 	}
// 	if(OS_system == "Linux"){
  	
// 	}
// }
// });

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
        console.log("Click");
        $http.get("Windows_poll") 
        .then(function(response) {
            $scope.WindowsVotes = response.data;            
        });
    }
    
    
}


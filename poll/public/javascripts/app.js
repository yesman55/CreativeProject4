
var app = angular.module('app', []);
app.controller('mainCtrl', function($scope, $http) {

  $scope.addvote = function(OS_system) {
	if(OS_system == "Windows"){
          $http.get(Windows_poll)
	  .then(function(res) {
 	    $scope.WindowsVote = res.data;
	  });  
  	}
	if(OS_system == "MacOS"){
	
	}
	if(OS_system == "Linux"){
  	
	}
}

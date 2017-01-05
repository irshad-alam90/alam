angular.module('starter')
.controller('homeCtrl', function($scope,$state){
	//var vm = this;
	$scope.login = function(){
		$state.go('login')
	}

	$scope.signup= function(){
      $state.go('signup')
    }

})

.controller('loginCtrl', function(){
	var vm = this;
})

.controller('signupCtrl', function(){
	var vm = this;
})
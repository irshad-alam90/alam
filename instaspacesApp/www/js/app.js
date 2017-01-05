angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home',{
    url: "/home",
     templateUrl: 'templates/home.html',
     controller: 'homeCtrl'
  })

  
  .state('login',{
    url: '/login',
     templateUrl: 'templates/login.html',
     controller: 'loginCtrl'
  })

  
  .state('signup',{
    url: "/signup",
     templateUrl: 'templates/signup.html',
     controller: 'signupCtrl'
  })



  /*.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/sliders');
  $stateProvider
  .state('sliders',{
    url: "/sliders",
     templateUrl: 'templates/sliders.html'
  })*/
})

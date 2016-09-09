angular
  .module('app')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('welcome', {
          url: '/',
          template: '<welcome></welcome>',
          onEnter: ['$location', '$state', function($location, $state) {
            if($location.search().goto){
              // if we were passed in a search param, and it has a path
              // to redirect to, then redirect to that path
              $state.go($location.search().goto);
            }
          }]
        })
        .state('home', {
          url: '/home',
          template: '<dashboard></dashboard>',
          onEnter: authorize
        })
        .state('patients-list', {
          url: '/patients-list',
          template: '<patient-list></patient-list>',
          onEnter: authorize
        })
        .state('login', {
          url: '/login',
          template: '<login></login>',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function() {
              $state.go('home');
            });
          }]
        })
        .state('register', {
          url: '/register',
          template: '<register></register>',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function() {
              $state.go('home');
            });
          }]
        });
      // Pretty Links
      $locationProvider.html5Mode(true);
    }
  ]);

// Lose auth to redirect if user is not logged in, further authentication on server-side
var authorize = ['$state', 'Auth', function($state, Auth) {
  Auth
    .currentUser()
    .then(function() {

    }, function(err) {
      // Auth failed, redirect to welcome page
      $state.go('welcome')
    });
}];

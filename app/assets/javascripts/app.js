angular
  .module('app', ['ui.router', 'templates', 'common', 'dashboard', 'patient-list', 'Devise'])
  .run(function($rootScope, Auth, $state) {

    // Listen to '$locationChangeSuccess', not '$stateChangeStart'
    $rootScope.$on('$locationChangeSuccess', function() {
      console.log('Cauth');
      Auth
        .currentUser()
        .then(function() {

        }, function(err) {
          // log-in promise failed. Redirect to log-in page.
          $state.go('welcome')
        });
    });
  })
  .component('app', {
    controller: 'AppController',
    templateUrl: 'app.view.html'
  })
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
          template: '<dashboard></dashboard>'
        })
        .state('patients-list', {
          url: '/patients-list',
          template: '<patient-list></patient-list>',
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


angular
  .module('dashboard', []);

angular
  .module('patient-list', []);

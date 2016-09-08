angular
  .module('app', ['ui.router', 'templates', 'common', 'dashboard', 'patient-list'])
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
        .state('home', {
          url: '/',
          template: '<dashboard></dashboard>'
        })
        .state('patients', {
          url: '/patients',
          template: '<patient-list></patient-list>'
        });

      // Pretty Links
      $locationProvider.html5Mode(true);
    }
  ]);

angular
  .module('dashboard', []);

angular
  .module('patient-list', []);

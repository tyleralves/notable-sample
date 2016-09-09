angular
  .module('app', ['ui.router', 'templates', 'common', 'dashboard', 'patient-list', 'Devise'])
  .component('app', {
    controller: 'AppController',
    templateUrl: 'app.view.html'
  });

angular
  .module('dashboard', []);

angular
  .module('patient-list', []);

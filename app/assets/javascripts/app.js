angular
  .module('app', ['ui.router', 'templates', 'common', 'dashboard', 'patient-list', 'Devise', 'ngFileUpload'])
  .component('app', {
    controller: 'AppController',
    templateUrl: 'app.view.html'
  });

angular
  .module('dashboard', []);

angular
  .module('patient-list', []);

angular
  .module('patient', []);
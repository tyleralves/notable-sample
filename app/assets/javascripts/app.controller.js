angular
  .module('common', [])
  .controller('AppController', AppController);

function AppController(NavService) {
  var ctrl = this;

  // Necessary to expand/ contract content container in response to sidebar close/ open
  ctrl.NavService = NavService;
}

AppController.$inject = ['NavService'];
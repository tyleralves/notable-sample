angular
  .module('app')
  .controller('WelcomeController', WelcomeController);

function WelcomeController(PatientsService) {
  var ctrl = this;

  //PatientsService is instantiated here so that its login event listener is ready

}

WelcomeController.$inject = ['PatientsService'];

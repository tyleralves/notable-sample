angular
  .module('dashboard')
  .controller('CreatePatientController', CreatePatientController);

function CreatePatientController(PatientsService) {
  var ctrl = this;

  // Used for create patient form
  ctrl.newPatient = {};

  ctrl.addPatient = function() {
    PatientsService.addPatient(ctrl.newPatient);
    ctrl.newPatient = '';
  };
}

CreatePatientController.$inject = ['PatientsService'];
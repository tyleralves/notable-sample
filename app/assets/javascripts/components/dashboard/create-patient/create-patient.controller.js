angular
  .module('dashboard')
  .controller('CreatePatientController', CreatePatientController);

function CreatePatientController(DashboardService, PatientsService) {
  var ctrl = this;

  // Used for create patient form
  ctrl.newPatient = {};

  ctrl.addPatient = function() {
    console.log(ctrl.newPatient);
    PatientsService.addPatient(ctrl.newPatient);
  };
}

CreatePatientController.$inject = ['DashboardService', 'PatientsService'];
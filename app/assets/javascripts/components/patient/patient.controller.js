angular
  .module('app')
  .controller('PatientController', PatientController);

function PatientController($stateParams, PatientsService) {
  var ctrl = this;

  ctrl.patient = PatientsService.patient;

  console.log($stateParams.patient_id);

  PatientsService.get($stateParams.patient_id);
}

PatientController.$inject = ['$stateParams', 'PatientsService'];

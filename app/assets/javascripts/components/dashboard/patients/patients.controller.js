angular
  .module('dashboard')
  .controller('PatientsController', PatientsController);

function PatientsController(PatientsService, ScientistsService) {
  var ctrl = this;

  ctrl.patients = PatientsService.patients;
  ctrl.scientists = ScientistsService.scientists;

  // Move this to ui-router resolve
  PatientsService.getPatients();

  // Move this to ui-router resolve
  ScientistsService.getScientists();

  ctrl.assignScientist = function(patientId, assignedScientist) {
    PatientsService.assignScientist(patientId, {scientist_id: assignedScientist.id});
  };
}

PatientsController.$inject = ['PatientsService', 'ScientistsService'];
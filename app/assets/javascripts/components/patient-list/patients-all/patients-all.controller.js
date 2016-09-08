angular
  .module('patient-list')
  .controller('PatientsAllController', PatientsAllController);

function PatientsAllController(PatientsService, ScientistsService) {
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

PatientsAllController.$inject = ['PatientsService', 'ScientistsService'];
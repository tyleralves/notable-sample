angular
  .module('dashboard')
  .controller('PatientsController', PatientsController);

function PatientsController(PatientsService, ScientistsService) {
  var ctrl = this;

  ctrl.patients = PatientsService.userPatients;
  ctrl.scientists = ScientistsService.scientists;

  ctrl.assignScientist = function(patientId, assignedScientist) {
    PatientsService.assignScientist(patientId, {scientist_id: assignedScientist.id});
  };
}

PatientsController.$inject = ['PatientsService', 'ScientistsService'];
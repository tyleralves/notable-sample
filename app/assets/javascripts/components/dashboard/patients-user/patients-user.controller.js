angular
  .module('dashboard')
  .controller('PatientsUserController', PatientsUserController);

function PatientsUserController(PatientsService, ScientistsService) {
  var ctrl = this;

  ctrl.patients = PatientsService.userPatients;
  ctrl.scientists = ScientistsService.scientists;

  ctrl.assignScientist = function(patientId, assignedScientist) {
    PatientsService.assignScientist(patientId, {scientist_id: assignedScientist.id});
  };
}

PatientsUserController.$inject = ['PatientsService', 'ScientistsService'];
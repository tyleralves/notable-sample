angular
  .module('app')
  .controller('PatientsController', PatientsController);

function PatientsController(ContentService, PatientsService) {
  var ctrl = this;

  ctrl.patients = PatientsService.patients;

  // Move this to ui-router resolve
  PatientsService.getPatients();


  // Used for assigning scientist to patient form
  ctrl.assignedScientist = {};

  ctrl.assignScientist = function() {
    PatientsService.assignScientist(ctrl.assignedScientist);
  };
}

PatientsController.$inject = ['ContentService', 'PatientsService'];
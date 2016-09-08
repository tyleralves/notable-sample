angular
  .module('dashboard')
  .controller('TesterController', TesterController);

function TesterController(DashboardService, PatientsService) {
  var ctrl = this;

// Used for create scientist form
  ctrl.newScientist = {};
  // Used for create physician form
  ctrl.newPhysician = {};

  ctrl.addScientist = function() {
    console.log(ctrl.newScentist);
    DashboardService.addScientist(ctrl.newScientist);
  };

  ctrl.addPhysician = function() {
    console.log(ctrl.newPhysician);
    DashboardService.addPhysician(ctrl.newPhysician);
  };
}

TesterController.$inject = ['DashboardService', 'PatientsService'];

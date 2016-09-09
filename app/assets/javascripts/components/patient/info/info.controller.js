angular
  .module('app')
  .controller('InfoController', InfoController);

function InfoController(PatientsService, UsersService) {
  var ctrl = this;

  ctrl.patient = PatientsService.patient;
  ctrl.newStatus = {};
  ctrl.currentUser = UsersService.currentUser;

  ctrl.addStatus = function() {
    PatientsService.addStatus(ctrl.patient.id, ctrl.newStatus);
    //PatientsService.get(ctrl.patient.id);
    ctrl.newStatus = '';
  };
}

InfoController.$inject = ['PatientsService', 'UsersService'];
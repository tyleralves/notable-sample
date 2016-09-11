angular
  .module('app')
  .controller('ResultsController', ResultsController);

function ResultsController(PatientsService, UsersService, Upload) {
  var ctrl = this;

  ctrl.patient = PatientsService.patient;
  ctrl.newStatus = {};
  ctrl.resultUpload = {};
  ctrl.currentUser = UsersService.currentUser;

  ctrl.addStatus = function() {
    PatientsService.addStatus(ctrl.patient.id, ctrl.newStatus);
    ctrl.newStatus = '';
  };

  ctrl.addResults = function() {

    if (ctrl.resultUpload) {
      ctrl.upload(ctrl.resultUpload);
    }
  };

  // Move to PatientsService
  ctrl.upload = function (file) {
    Upload.upload({
      url: '/patients/' + ctrl.patient.id + '/importresults.json',
      data: {file: file}
    }).then(function (res) {
      console.log('Success ' + res.config.data.file.name + 'uploaded. Response: ' + res.data);
      PatientsService.get(ctrl.patient.id);
    }, function (res) {
      console.log('Error status: ' + res.status);
    }, function (evt) {
      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
      console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    });
  };
}

ResultsController.$inject = ['PatientsService', 'UsersService', 'Upload'];
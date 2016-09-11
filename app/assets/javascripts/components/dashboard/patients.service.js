angular
  .module('common')
  .service('PatientsService', PatientsService);

function PatientsService($http, $rootScope, UsersService) {
  var PatientsService = {};

  PatientsService.patient = {};
  PatientsService.patients = [];
  PatientsService.userPatients = [];
  PatientsService.currentUser = UsersService.currentUser;

  // Get one patient
  PatientsService.get = function(patient_id) {
    return $http.get('/patients/' + patient_id + '.json')
      .then(function(patient) {
        angular.copy(patient.data, PatientsService.patient);
      }
    );
  };

  // Gets all patients
  PatientsService.getPatients = function() {
    return $http.get('/patients.json')
      .then(function(patients) {
        angular.copy(patients.data, PatientsService.patients);
      });
  };

  // Gets current user's patients
  PatientsService.getUserPatients = function() {
    return $http.get('/users/' + PatientsService.currentUser.id + '/patients.json')
      .then(function(patients) {
        angular.copy(patients.data, PatientsService.userPatients);
      });
  };

  // Adds record to patients table and patient reference to users table
  PatientsService.addPatient = function(patient) {
    return $http.post('/users/' + UsersService.currentUser.id + '/patients.json', patient)
      .then(function(patient){
        PatientsService.patients.push(patient.data);
        PatientsService.userPatients.push(patient.data);
      });
  };

  // Puts provided scientist_id in patients table patient(:id) row
  PatientsService.assignScientist = function(patient_id, scientist_id) {
    return $http.put('patients/' + patient_id + '/assignscientist.json', scientist_id)
      .then(function(patient){
        PatientsService.getPatients();
        PatientsService.getUserPatients();
      });
  };

  // Adds record to statuses table and status reference to patients table
  PatientsService.addStatus = function(patient_id, status) {
    return $http.post('/patients/' + patient_id + '/statuses.json', status)
      .then(function(status){
        PatientsService.patient.statuses.push(status.data);
      });
  };

  // Gets current user's patients on login
  /* Calling here is more expensive than calling specifically when needed in controller
   * However, performance is definitely not an issue for this application, and this
   * infrastructure is much easier to reason about.
   */

  $rootScope.$on('UsersService:getCurrentUser', function(e, user) {
    PatientsService.getUserPatients();
  });

  // Clear userPatients on logout
  $rootScope.$on('devise:logout', function(e, user) {
    angular.copy({}, PatientsService.userPatients);
  });

  return PatientsService;
}

PatientsService.$inject = ['$http', '$rootScope', 'UsersService'];

angular
  .module('app')
  .service('PatientsService', PatientsService);

function PatientsService($http) {
  var PatientsService = {};

  PatientsService.patients = [];
  PatientsService.currentPatient = {}; //Necessary?

  // Gets all patients
  PatientsService.getPatients = function() {
    return $http.get('/patients.json')
      .then(function(patients) {
        console.log(patients);
        angular.copy(patients.data, PatientsService.patients);
      });
  };

  // Adds record to patients table and patient reference to users table
  PatientsService.addPatient = function(patient) {
    return $http.post('/physicians/4/patients.json', patient)
      .then(function(patient){
        PatientsService.patients.push(patient.data);
        angular.copy(patient.data, PatientsService.currentPatient);
      });
  };

  // Puts provided scientist_id in patients table patient(:id) row
  PatientsService.assignScientist = function(scientist_id) {
    console.log(scientist_id);
    return $http.put('patients/2/assignscientist.json', scientist_id)
      .then(function(patient){
        console.log(patient);
        //PatientsService.physicians.push(physician.data);
      });
  };

  return PatientsService;
}

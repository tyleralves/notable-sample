angular
  .module('app')
  .service('ContentService', ContentService);

function ContentService($http) {
  var ContentService = {};

  ContentService.scientists = [];
  ContentService.physicians = [];

  ContentService.addScientist = function(scientist) {
    return $http.post('/scientists.json', scientist)
      .then(function(scientist){
        console.log(scientist);
        ContentService.scientists.push(scientist.data);
      });
  };

  ContentService.addPhysician = function(physician) {
    return $http.post('/physicians.json', physician)
      .then(function(physician){
        console.log(physician);
        ContentService.physicians.push(physician.data);
      });
  };

  return ContentService;
}
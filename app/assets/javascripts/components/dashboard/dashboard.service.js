angular
  .module('dashboard')
  .service('DashboardService', DashboardService);

function DashboardService($http) {
  var DashboardService = {};

  DashboardService.scientists = [];
  DashboardService.physicians = [];

  DashboardService.addScientist = function(scientist) {
    return $http.post('/scientists.json', scientist)
      .then(function(scientist){
        DashboardService.scientists.push(scientist.data);
      });
  };

  DashboardService.addPhysician = function(physician) {
    return $http.post('/physicians.json', physician)
      .then(function(physician){
        DashboardService.physicians.push(physician.data);
      });
  };

  return DashboardService;
}

DashboardService.$inject = ['$http'];
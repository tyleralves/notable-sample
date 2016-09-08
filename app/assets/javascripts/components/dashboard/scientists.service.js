angular
  .module('dashboard')
  .service('ScientistsService', ScientistsService);

function ScientistsService($http) {

  ScientistsService.scientists = [];

  // Gets all scientists
  ScientistsService.getScientists = function() {
    return $http.get('/scientists.json')
      .then(function(scientists) {
        angular.copy(scientists.data, ScientistsService.scientists);
      });
  };

  return ScientistsService;
}

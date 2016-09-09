angular
  .module('common')
  .service('UsersService', UsersService);

function UsersService($rootScope, Auth) {
  var UsersService = {};

  UsersService.currentUser = {};

  UsersService.getCurrentUser = function() {
    Auth.currentUser().then(function(user) {
      angular.copy(user, UsersService.currentUser);
      $rootScope.$broadcast('UsersService:getCurrentUser');
    });
  };
  //UsersService.getCurrentUser();

  // Auth event listeners
  $rootScope.$on('devise:new-registration', function(e, user) {
    angular.copy(user, UsersService.currentUser);
  });
  $rootScope.$on('devise:login', function(e, user) {
    UsersService.getCurrentUser();
  });
  $rootScope.$on('devise:logout', function(e, user) {
    angular.copy({}, UsersService.currentUser);
  });


  return UsersService;
}

UsersService.$inject = ['$rootScope', 'Auth'];

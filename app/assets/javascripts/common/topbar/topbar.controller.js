angular
  .module('app')
  .controller('TopbarController', TopbarController);

function TopbarController($state, Auth, NavService, UsersService) {
  var ctrl = this;

  // Authorization
  ctrl.signedIn = Auth.isAuthenticated;
  ctrl.logout = function() {
    Auth.logout();
    $state.go('welcome');
  };
  ctrl.user = UsersService.currentUser;

  // Initialize properties for nav effects
  ctrl.isCollapsed = true;

  // Moved to service so it can communicate with app.view
  ctrl.NavService = NavService;
  ctrl.closeSide = function() {
    NavService.closeSide();
  };

}

TopbarController.$inject = ['$state', 'Auth', 'NavService', 'UsersService'];
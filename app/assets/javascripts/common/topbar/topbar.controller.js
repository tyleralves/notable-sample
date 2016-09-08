angular
  .module('app')
  .controller('TopbarController', TopbarController);

function TopbarController(NavService) {
  var ctrl = this;

  // Initialize variables for nav effects
  ctrl.isCollapsed = true;
  ctrl.isActive = false;

  // Moved to service so it can communicate with app.view
  ctrl.NavService = NavService;
  ctrl.closeSide = function() {
    NavService.closeSide();
  };

}

TopbarController.$inject = ['NavService'];
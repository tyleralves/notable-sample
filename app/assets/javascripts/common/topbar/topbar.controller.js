angular
  .module('app')
  .controller('TopbarController', TopbarController);

function TopbarController() {
  var ctrl = this;
  ctrl.name = "topbar";

  ctrl.collapsed = true;
}

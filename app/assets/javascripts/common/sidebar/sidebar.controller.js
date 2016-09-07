angular
  .module('app')
  .controller('SidebarController', SidebarController);

function SidebarController() {
  var ctrl = this;
  ctrl.name = "sidebar";
}

/**
 * Created by Tyler on 9/3/2016.
 */
angular
  .module('app')
  .controller('TestController', TestController);

function TestController() {
  var ctrl = this;
  ctrl.name = "TYler";
}
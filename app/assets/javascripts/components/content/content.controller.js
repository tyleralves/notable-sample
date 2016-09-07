/**
 * Created by Tyler on 9/3/2016.
 */
angular
  .module('app')
  .controller('ContentController', ContentController);

function ContentController(ContentService) {
  var ctrl = this;
  ctrl.name = "TYler";

}

ContentController.$inject = ['ContentService'];
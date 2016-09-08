angular
  .module('app')
  .service('NavService', NavService);


function NavService() {
  var NavService = {};

  NavService.isSideClosed = false;

  NavService.closeSide = function() {
    NavService.isSideClosed = !NavService.isSideClosed;
  };

  return NavService;
}

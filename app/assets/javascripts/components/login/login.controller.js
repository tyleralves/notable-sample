angular
  .module('app')
  .controller('LoginController', LoginController);

function LoginController($state, Auth) {
  var ctrl = this;

  ctrl.user = {};

  ctrl.login = function() {
    Auth.login(ctrl.user).then(function(user){
      $state.go('home');
    });
  };
}

LoginController.$inject = ['$state','Auth'];
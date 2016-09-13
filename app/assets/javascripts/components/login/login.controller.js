angular
  .module('app')
  .controller('LoginController', LoginController);

function LoginController($state, Auth) {
  var ctrl = this;

  ctrl.user = {};
  ctrl.error = '';

  ctrl.login = function() {
    Auth.login(ctrl.user).then(function(user){
      $state.go('home');
    }, function(error) {
      ctrl.error = 'Invalid email or password, please try again.';
    });
  };
}

LoginController.$inject = ['$state','Auth'];
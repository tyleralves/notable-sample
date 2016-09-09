angular
  .module('app')
  .controller('RegisterController', RegisterController);

function RegisterController($state, Auth) {
  var ctrl = this;

  ctrl.user = {
    type: 'Physician'
  };

  ctrl.register = function() {
    Auth.register(ctrl.user)
      .then(function() {
        $state.go('home');
      });
  };
}

RegisterController.$inject = ['$state', 'Auth'];

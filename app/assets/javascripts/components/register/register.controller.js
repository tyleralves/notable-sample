angular
  .module('app')
  .controller('RegisterController', RegisterController);

function RegisterController($state, Auth) {
  var ctrl = this;

  ctrl.user = {
    type: 'Physician',
    usertype: 'Physician'
  };
  ctrl.error = '';

  ctrl.register = function() {
    Auth.register(ctrl.user)
      .then(function() {
        $state.go('home');
      }, function(error) {
        ctrl.error = "Invalid registration information. Please check all fields and resubmit.";
      });
  };
}

RegisterController.$inject = ['$state', 'Auth'];

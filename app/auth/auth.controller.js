// Create Auth controller
angular.module('angularfireSlackApp')
  .controller('AuthCtrl', function (Auth, $state) {
      var authCtrl = this;

      authCtrl.user = {
          email: '',
          password: ''
      };
 
      // Authenticates user trying to log in
      authCtrl.login = function () {
          Auth.$authWithPassword(authCtrl.user).then(function (auth) {
              $state.go('home');
          }, function (error) {
              authCtrl.error = error;
          });
      };

      // Registers new user
      authCtrl.register = function () {
          Auth.$createUser(authCtrl.user).then(function (user) {
              authCtrl.login();
          }, function (error) {
              authCtrl.error = error;
          });
      };
 
  });
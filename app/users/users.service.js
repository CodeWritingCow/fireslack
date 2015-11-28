angular.module('angularfireSlackApp')
  .factory('Users', function ($firebaseArray, $firebaseObject, FirebaseUrl) {
      var usersRef = new Firebase(FirebaseUrl+'users');

      var Users = {};

      return Users;
  });
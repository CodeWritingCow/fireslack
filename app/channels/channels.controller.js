angular.module('angularfireSlackApp')
  .controller('ChannelsCtrl', function ($state, Auth, Users, profile, channels) {
      var channelsCtrl = this;

      channelsCtrl.profile = profile;
      channelsCtrl.channels = channels;

      channelsCtrl.getDisplayName = Users.getDisplayName;
      channelsCtrl.getGravatar = Users.getGravatar;

      // Lets user log out and return to home state
      channelsCtrl.logout = function () {
          Auth.$unauth();
          $state.go('home');
      };

  });
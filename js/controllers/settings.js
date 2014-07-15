
angular.module('App')
.controller('SettingsCtrl', function($scope) {

  $scope.urlLink = "www.willpower.art.br/v7";

  $scope.setOnlyWidth = function() {
    $('#iphone,#tablet,#ipad').attr('height','500');
    $('.size-iphone').html('(320 x 500)');
    $('.size-tablet').html('(480 x 500)');
    $('.size-ipad').html('(768 x 500)');
  };

  $scope.setScreenSize = function() {
    $('#iphone').attr('height','480');
    $('#tablet').attr('height','640');
    $('#ipad').attr('height','1024');

    $('.size-iphone').html('(320 x 480)');
    $('.size-tablet').html('(480 x 640)');
    $('.size-ipad').html('(768 x 1024)');
  };
});


angular.module('App')
.controller('TestareaCtrl', function($scope) {

  $scope.orientation = 'portrat';

  $scope.screenSizes = [
  {
    name: 'iPhone',
    width: 320,
    height: 500,
    iframeId: 'iphone'
  },
  {
    name: 'tablet',
    width: 480,
    height: 500,
    iframeId: 'tablet'
  },
  {
    name: 'iPad',
    width: 768,
    height: 500,
    iframeId: 'ipad'
  }
  ]

});

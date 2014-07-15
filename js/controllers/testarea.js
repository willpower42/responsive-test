
angular.module('App')
.controller('TestareaCtrl', function($scope) {

  $scope.orientation = 'portrat';

  $scope.screenSizes = [
  {
    name: 'iPhone',
    width: 320,
    height: 500,
    iframeId: 'iphone',
    boxClass: 'box-iphone'
  },
  {
    name: 'tablet',
    width: 480,
    height: 500,
    iframeId: 'tablet',
    boxClass: 'box-tablet'
  },
  {
    name: 'iPad',
    width: 768,
    height: 500,
    iframeId: 'ipad',
    boxClass: 'box-ipad'
  }
  ]

});

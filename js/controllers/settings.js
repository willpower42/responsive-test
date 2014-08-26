angular.module('App')
    .controller('SettingsCtrl', function ($scope, $rootScope) {

        $scope.$watch('urlLink', function () {
            if ($scope.delayedTimeout) {
                window.clearInterval($scope.delayedTimeout);
            }
            $scope.delayedTimeout = window.setTimeout(function () {
                $rootScope.$apply(function () {
                    $scope.delayedUrlLink = $scope.urlLink;
                });
            }, 1000);
        });

        $scope.urlLink = "www.willpower.art.br";

        $scope.reload = function () {
            $('.test-area').find('iframe').attr('src', function (i, val) {
                return val;
            });
        };

        $scope.setOnlyWidth = function () {
            $('#iphone,#tablet,#ipad').attr('height', '500');
            $('.box-iphone .frame-size').html('(320 x 500)');
            $('.box-tablet .frame-size').html('(480 x 500)');
            $('.box-ipad .frame-size').html('(768 x 500)');
        };

        $scope.setScreenSize = function () {
            $('#iphone').attr('height', '480');
            $('#tablet').attr('height', '640');
            $('#ipad').attr('height', '1024');

            $('.box-iphone .frame-size').html('(320 x 480)');
            $('.box-tablet .frame-size').html('(480 x 640)');
            $('.box-ipad .frame-size').html('(768 x 1024)');
        };
    });

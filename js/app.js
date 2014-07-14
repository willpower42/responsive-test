/*
 Version: 0.1.2a
  Author: Felipe Nunes
 Website: http://www.willpower.art.br
  github: http://willpowerart.github.io
*/

var app = angular.module('App', []);

function Ctrl($scope) {
	$scope.init = function() {
		$scope.urlLink = "www.willpower.art.br/v7";
	}
}

app.directive('httpPrefix', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, controller) {
			function ensureHttpPrefix(value) {
				// para adicionar o http:// caso nao tenha
				if(value && !/^(http):\/\//i.test(value) && 'http://'.indexOf(value) === -1) {
					controller.$setViewValue('http://' + value);
					controller.$render();
					return 'http://' + value;
				} else {
					return value;
				}	
			}
			controller.$formatters.push(ensureHttpPrefix);
			controller.$parsers.push(ensureHttpPrefix);
		}
	};
});
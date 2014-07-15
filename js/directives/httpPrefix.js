
angular.module('App')
  .directive('httpPrefix', function() {
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

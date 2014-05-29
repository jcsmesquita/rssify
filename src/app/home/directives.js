angular.module('rssify.home.directives', [])


// Collage Directive
.directive('collage', function($timeout) {
  return function(scope, element, attrs) {

    // angular.element(element).css('color','blue');
    if (scope.$last === true) {
      $timeout(function () {
        scope.$emit('ngRepeatFinished');
      });
    }
  };
});

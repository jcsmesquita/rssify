angular.module('rssify.home.directives', [])


// Collage Directive
.directive('collage', function($timeout) {
  return function(scope, element, attrs) {

    // angular.element(element).css('color','blue');
    if (scope.$last) {
      if (scope.$last === true) {
        $timeout(function () {
          // console.log("here");
          // $('.Collage').removeWhitespace().collagePlus({
          //   'fadeSpeed': 2000,
          //   'targetHeight': 250,
          //   'effect': 'effect-3',
          //   'direction': 'vertical'
          // }).collageCaption();
          scope.$emit('ngRepeatFinished');
        });
      }
		
	}
  };
});

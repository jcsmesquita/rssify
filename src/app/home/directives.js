angular.module('rssify.home.directives', [])


// Collage Directive
.directive('fadeIn', function() {
  return function(scope, element, attrs) {
	
  };
})

.directive('imageloaded', [
    function () {

        'use strict';
        return {
            restrict: 'A',

            link: function(scope, element, attrs) {
				
  
                var cssClass = attrs.loadedclass;

				console.log(cssClass);

                element.bind('load', function (e) {
					console.log(element);
                    angular.element(element).addClass(cssClass);
                });
            }
        };
    }
]);

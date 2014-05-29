/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope, $http ) {

  $scope.data = {
    "groupSize": 2,
    "rssFeed": null,
    "items": []
  };

  $http.get('http://pipes.yahoo.com/pipes/pipe.run?_id=7a9eb77e86d1e749f042ea8892aa6b79&_render=json&url=http://qz.com/feed').success(function(data){
    $scope.data.rssFeed = data;

    var group = [];
    // Parse the items into groups (number of items per row)
    for (var i = 0; i < data.count; i++) {

      if(i % $scope.data.groupSize === 0){
      
        // Push group and clear
        $scope.data.items.push(group);
        group = [];
      
      }
      group.push(data.value.items[i]);
    }

    // console.log($scope.data.items);
  });

  // This can be included in the parsing method later, but at the moment it's a check if media:content is an array or single object.
  $scope.instanceOfArray = function(value){
    if(value instanceof Array) {
      return true;
    }
    else {
      return false;
    }
  };

  $scope.isDefined = function(value){
    if(typeof value != "undefined") {
      return true;
    }
    else {
      return false;
    }
  };
});


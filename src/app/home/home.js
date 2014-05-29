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
angular.module( 'rssify.home', [
  'ui.router',
  'plusOne',
  'akoenig.deckgrid'
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
.controller( 'HomeCtrl', function HomeController( $scope, $http, $document ) {

  $scope.data = {
    "groupSize": 2,
    "rssFeed": null,
    "items": [
      // {"title": "Joao", "src": ['http://placehold.it/350x150/69D2E7/ffffff']},
      // {"title": "Joao", "src": ['http://placehold.it/472x500/F38630/ffffff']},
      // {"title": "Joao", "src": ['http://placehold.it/540x360/FA6900/ffffff']},
      // {"title": "Joao", "src": ["http://placehold.it/350x150/69D2E7/ffffff"]},
      // {"title": "Joao", "src": ["http://placehold.it/320x180/A7DBD8/ffffff"]},
      // {"title": "Joao", "src": ["http://placehold.it/320x300/E0E4CC/ffffff"]},
      // {"title": "Joao", "src": ["http://placehold.it/472x500/F38630/ffffff"]},
      // {"title": "Joao", "src": ["http://placehold.it/540x360/FA6900/ffffff"]},
      // {"title": "Joao", "src": ["http://placehold.it/800x600/ECD078/ffffff"]},
      // {"title": "Joao", "src": ["http://placehold.it/400x120/D95B43/ffffff"]},
      // {"title": "Joao", "src": ["http://placehold.it/300x300/C02942/ffffff"]},
      // {"title": "Joao", "src": ["http://placehold.it/320x500/542437/ffffff"]},
      // {"title": "Joao", "src": ["http://placehold.it/450x300/53777A/ffffff"]}
    ]
  };

  $document.ready(function () {
    $http.get('http://pipes.yahoo.com/pipes/pipe.run?_id=7a9eb77e86d1e749f042ea8892aa6b79&_render=json&url=http://qz.com/feed').success(function(data){

      var items = [];      

      angular.forEach(data.value.items, function(item, key){
        var _item = {
          "src": [],
          "caption": item.title
        };

        // console.log(item);
        if (item["media:thumbnail"]) {
          _item.src.push(item["media:thumbnail"].url);
          $scope.data.items.push(_item);
        }
      });
    });
  });
});


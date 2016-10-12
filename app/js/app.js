var angular = require('angular');
require('angular-route');
require('angular-resource');

var app = angular.module('gastromaticApp', [ 'ngRoute' ]);

require('./service');
require('./controller');

app.config(function($routeProvider) {
	
  $routeProvider.when('/curso', {
    templateUrl: 'views/curso.html',
    controller: 'CursoController'
  })
  .when('/roteiro', {
    templateUrl: 'views/roteiro.html'
  })
  .otherwise({
    redirectTo: '/curso'
  });
});
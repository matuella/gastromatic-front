var angular = require('angular');
require('angular-route');
require('angular-resource');

var app = angular.module('gastromaticApp', [ 'ngRoute' ]);

require('./service');
require('./controller');

app.value("config", function () {
   rootUrl: "http://localhost:8080/gastromatic"
});

app.config(function($routeProvider) {

  $routeProvider.when('/curso', {
    templateUrl: 'views/curso.html',
    controller: 'CursoController'
  })
  .when('/roteiro', {
    templateUrl: 'views/roteiro.html',
    controller: 'RoteiroController'
  })
  .when('/requisicao', {
    templateUrl: 'views/requisicao.html',
    controller: 'RequisicaoController'
  })
  .otherwise({
    redirectTo: '/curso'
  });
});
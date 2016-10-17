var angular = require('angular');
require('angular-route');
require('angular-resource');

var app = angular.module('gastromaticApp', ['ngRoute']);

app.value("config", {
    rootUrl: "http://localhost:8080/gastromatic"
});

require('./service');
require('./controller');

app.config(function ($routeProvider) {

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
        .when('/aula', {
            templateUrl: 'views/aula.html',
            controller: 'AulaController'
        })
        .otherwise({
            redirectTo: '/curso'
        });
});
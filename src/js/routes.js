'use strict';

angular.module('Gastromatic').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('cursos', {
                url: '/cursos',
                templateUrl: 'templates/cursos.html'
            })
            .state('roteiros', {
                url: '/roteiros',
                templateUrl: 'templates/roteiros.html'
            })
            .state('aulas', {
                url: '/aulas',
                templateUrl: 'templates/aulas.html'
            })
            .state('receitas', {
                url: '/receitas',
                templateUrl: 'templates/receitas.html'
            })
            .state('insumos', {
                url: '/insumos',
                templateUrl: 'templates/insumos.html'
            })
            .state('requisicoes', {
                url: '/requisicoes',
                templateUrl: 'templates/requisicoes.html'
            })
            .state('solicitacoes', {
                url: '/solicitacoes',
                templateUrl: 'templates/solicitacoes.html'
            })
    }
]);
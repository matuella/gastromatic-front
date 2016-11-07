angular.module('Gastromatic')
    .service('SolicitacaoService', ['$http', '$log', 'config', SolicitacaoService]);

function SolicitacaoService($http, $log, config) {

    this.listSolicitacoes = function () {
        var listSolicitacoesPromise = $http.get(config.rootUrl + '/solicitacoes');

        listSolicitacoesPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return listSolicitacoesPromise;
    }
}

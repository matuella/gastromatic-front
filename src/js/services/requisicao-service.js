angular.module('Gastromatic')
    .service('RequisicaoService', ['$http', '$log', 'config', RequisicaoService]);

function RequisicaoService($http, $log, config) {


    this.gerarRequisicaoESolicitacoes = function (newRequisicaoInsumo) {
        var gerarReqPromise = $http.post(config.rootUrl + '/requisicoes', newRequisicaoInsumo);

        gerarReqPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return gerarReqPromise;
    }

}

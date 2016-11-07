angular.module('Gastromatic')
    .controller('SolicitacaoController', ['$scope', 'SolicitacaoService', SolicitacaoController]);

function SolicitacaoController($scope, SolicitacaoService) {

    SolicitacaoService.listSolicitacoes().then(function(response) {
        if(response.status == 200){
            $scope.solicitacoes = JSOG.decode(response.data);
        } else{
            //tratar erro
        }
    });

}
/**
 * Created by guilh on 17/10/2016.
 */
var jsog = require('jsog');

module.exports = function ($scope, RequisicaoService) {

    RequisicaoService.listCursos().then(function (response) {
        if (response.status == 200) {
            $scope.cursosDisponiveis = jsog.decode(response.data);
        } else {
            //tratar erro
        }
    });

    $scope.$watch('roteiroSelecionado', function () {
        var insumosSelecionados = [];
        var roteiro = $scope.roteiroSelecionado;

        if (roteiro != null) {
            for (var i = 0; i < roteiro.aulas.length; ++i) {
                var receitasDaAula = roteiro.aulas[i].receitas;
                for (var j = 0; j < receitasDaAula.length; ++j) {
                    var insumosDaReceita = receitasDaAula[j].insumos;
                    for (var k = 0; k < insumosDaReceita.length; ++k) {
                        var novoInsumo = {
                            "insumo": insumosDaReceita[k],
                            "quantidade": 1
                        };
                        insumosSelecionados.push(novoInsumo);
                    }
                }
            }
        }

        $scope.insumosFiltrados = insumosSelecionados;
    });

    // $scope.checkAll = function() {
    //     $scope.user.roles = angular.copy($scope.roles);
    // };
    // https://vitalets.github.io/checklist-model/
}
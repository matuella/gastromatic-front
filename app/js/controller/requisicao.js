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

    $scope.changedRoteiro = function () {
        var roteiro = $scope.roteiroSelecionado;

        for (var i = 0; i < roteiro.aulas.length; ++i) {
            roteiro.aulas[i].selected = true;
        }

        $scope.geraInsumos();
    }

    $scope.geraInsumos = function () {
        var insumosSelecionados = [];
        var roteiro = $scope.roteiroSelecionado;

        if (roteiro != null) {
            for (var i = 0; i < roteiro.aulas.length; ++i) {
                if (roteiro.aulas[i].selected) {
                    var receitasDaAula = roteiro.aulas[i].receitas;

                    for (var j = 0; j < receitasDaAula.length; ++j) {
                        var detalhesReceita = receitasDaAula[j].detalhesReceita;

                        for (var k = 0; k < detalhesReceita.length; ++k) {
                            var novoDetalhe = {
                                "insumo": detalhesReceita[k].insumo,
                                "quantidade": detalhesReceita[k].quantidadeInsumo,
                                "medida": "TBI"
                            };

                            insumosSelecionados.push(novoDetalhe);
                        }
                    }
                }
            }
        }

        $scope.insumosFiltrados = insumosSelecionados;
    }

    // $scope.checkAll = function() {
    //     $scope.user.roles = angular.copy($scope.roles);
    // };
    // https://vitalets.github.io/checklist-model/
}
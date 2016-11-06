angular.module('Gastromatic')
    .controller('RequisicaoController', ['$scope', 'RequisicaoService', 'CursoService', RequisicaoController]);

function RequisicaoController($scope, RequisicaoService, CursoService) {

    CursoService.listCursos().then(function (response) {
        if (response.status == 200) {
            $scope.cursosDisponiveis = JSOG.decode(response.data);
        } else {
            //tratar erro
        }
    });

    $scope.changedRoteiro = function (roteiroSelecionado) {

        for (var i = 0; i < roteiroSelecionado.aulas.length; ++i) {
            roteiroSelecionado.aulas[i].selected = true;
        }

        $scope.gerarInsumos(roteiroSelecionado.aulas);
    }

    $scope.gerarInsumos = function (aulas) {
        var insumosSelecionados = [];

        if (aulas) {
            for (var i = 0; i < aulas.length; ++i) {
                if (aulas[i].selected) {
                    var receitasDaAula = aulas[i].receitas;

                    for (var j = 0; j < receitasDaAula.length; ++j) {
                        var detalhesReceita = receitasDaAula[j].receitaInsumo;

                        for (var k = 0; k < detalhesReceita.length; ++k) {
                            var detalheExistente = getDetalheReceitaByInsumo(insumosSelecionados, detalhesReceita[k].insumo);

                            if (detalheExistente) {
                                detalheExistente.qtd += detalhesReceita[k].qtdInsumo;
                            } else {

                                var novoDetalhe = {
                                    "insumo": detalhesReceita[k].insumo,
                                    "qtd": detalhesReceita[k].qtdInsumo,
                                    "medida": "-"
                                };

                                insumosSelecionados.push(novoDetalhe);
                            }
                        }
                    }
                }
            }
        }

        $scope.insumosFiltrados = insumosSelecionados;
    }

    $scope.gerarRequisicaoESolicitacoes = function (insumosFiltrados) {

        RequisicaoService.gerarRequisicaoESolicitacoes(insumosFiltrados).then(function (response) {
            if (response.status == 200) {
                alert('REQUISIÇÃO GERADA COM SUCESSO!');
            } else {
                //tratar erro
            }
        });
    }

    function getDetalheReceitaByInsumo(insumosSelecionados, insumoReferencia) {

        var result = insumosSelecionados.filter(function (insumoSelecionado) {
            return insumoSelecionado.insumo == insumoReferencia;
        });

        return result ? result[0] : null;
    }

    // $scope.checkAll = function() {
    //     $scope.user.roles = angular.copy($scope.roles);
    // };
    // https://vitalets.github.io/checklist-model/
}
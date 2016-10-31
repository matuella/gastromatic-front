angular.module('Gastromatic')
    .controller('ReceitaController', ['$scope', 'ReceitaService', ReceitaController]);

function ReceitaController($scope, ReceitaService) {

    ReceitaService.listReceitas().then(function(response) {
        if(response.status == 200){
            $scope.receitas = JSOG.decode(response.data);
        } else{
            //tratar erro
        }
    });

    $scope.addReceita = function(newReceita){
        jsogReceita = JSOG.encode(newReceita);

        ReceitaService.saveReceita(jsogReceita).then(function (response) {
            if(response.status == 200){
                $scope.receitas.push(JSOG.decode(response.data));
            } else{
                //Tratar erro com pop-up na tela.
            }
            delete $scope.receita;
        });
    }
}
var jsog = require('jsog');

module.exports = function ($scope, ReceitaService) {

    ReceitaService.listReceitas().then(function(response) {
        if(response.status == 200){
            $scope.receitas = jsog.decode(response.data);
        } else{
            //tratar erro
        }
    });

    $scope.addReceita = function(newReceita){
        jsogReceita = jsog.encode(newReceita);

        ReceitaService.saveReceita(jsogReceita).then(function (response) {
            if(response.status == 200){
                $scope.receitas.push(jsog.decode(response.data));
            } else{
                //Tratar erro com pop-up na tela.
            }
            delete $scope.receita;
        });
    }
}
var jsog = require('jsog');

module.exports = function ($scope, RoteiroService) {

    RoteiroService.listRoteiros().then(function(response) {
        if(response.status == 200){
            $scope.roteiros = jsog.decode(response.data);
        } else{
            //tratar erro
        }
    });

    RoteiroService.listCursos().then(function(response) {
        if(response.status == 200){
            $scope.cursosDisponiveis = jsog.decode(response.data);
        } else{
            //tratar erro
        }
    });

    $scope.addRoteiro = function(novoRoteiro){
        jsogRoteiro = jsog.encode(novoRoteiro);

        RoteiroService.createRoteiro(jsogRoteiro).then(function (response) {
            if(response.status == 200){
                $scope.roteiros.push(jsog.decode(response.data)); //Isso não vai dar problema de inconsistência por n ter o id?
            } else{
                //Tratar erro com pop-up na tela.
            }
            delete $scope.roteiro;
        });
    }
}
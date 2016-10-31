angular.module('Gastromatic')
    .controller('RoteiroController', ['$scope', 'RoteiroService', 'CursoService', RoteiroController]);

function RoteiroController($scope, RoteiroService, CursoService) {

    RoteiroService.listRoteiros().then(function(response) {
        if(response.status == 200){
            $scope.roteiros = JSOG.decode(response.data);
        } else{
            //tratar erro
        }
    });

    CursoService.listCursos().then(function(response) {
        if(response.status == 200){
            $scope.cursosDisponiveis = JSOG.decode(response.data);
        } else{
            //tratar erro
        }
    });

    $scope.addRoteiro = function(newRoteiro){
        jsogRoteiro = JSOG.encode(newRoteiro);

        RoteiroService.saveRoteiro(jsogRoteiro).then(function (response) {
            if(response.status == 200){
                $scope.roteiros.push(JSOG.decode(response.data)); //Isso não vai dar problema de inconsistência por n ter o id?
            } else{
                //Tratar erro com pop-up na tela.
            }
            delete $scope.roteiro;
        });
    }
}
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


        console.log($scope.pesquisaRoteiro);
        console.log($scope.roteiro);
        console.log(jsogRoteiro);

        RoteiroService.saveRoteiro(jsogRoteiro).then(function (response) {
            if(response.status == 200){
                $scope.roteiros.push(JSOG.decode(response.data)); //Isso não vai dar problema de inconsistência por n ter o id?
            } else{
                //Tratar erro com pop-up na tela.
            }

            console.log("DELETANDO: " + $scope.roteiro);
            delete $scope.roteiro;
        });
    }
}
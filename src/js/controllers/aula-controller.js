angular.module('Gastromatic')
    .controller('AulaController', ['$scope', 'AulaService', AulaController]);

function AulaController($scope, AulaService) {

    AulaService.listAulas().then(function(response) {
        if(response.status == 200){
            $scope.aulas = JSOG.decode(response.data);
        } else{
            //tratar erro
        }
    });

    $scope.addAula = function(newAula){
        jsogAula = JSOG.encode(newAula);

        AulaService.saveAula(jsogAula).then(function (response) {
            if(response.status == 200){
                $scope.aulas.push(JSOG.decode(response.data)); //Isso não vai dar problema de inconsistência por n ter o id?
            } else{
                //Tratar erro com pop-up na tela.
            }
            delete $scope.aula;
        });
    }
}
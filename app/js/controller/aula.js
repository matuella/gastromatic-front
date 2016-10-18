var jsog = require('jsog');

module.exports = function ($scope, AulaService) {

    AulaService.listAulas().then(function(response) {
        if(response.status == 200){
            $scope.aulas = jsog.decode(response.data);
        } else{
            //tratar erro
        }
    });

    $scope.addAula = function(newAula){
        jsogAula = jsog.encode(newAula);

        AulaService.saveAula(jsogAula).then(function (response) {
            if(response.status == 200){
                $scope.aulas.push(jsog.decode(response.data)); //Isso não vai dar problema de inconsistência por n ter o id?
            } else{
                //Tratar erro com pop-up na tela.
            }
            delete $scope.aula;
        });
    }
}
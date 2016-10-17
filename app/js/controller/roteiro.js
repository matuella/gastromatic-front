var jsog = require('jsog');

module.exports = function ($scope, RoteiroService) {

    RoteiroService.listRoteiros().then(function(response) {
        if(response.status == 200){
            $scope.roteiros = jsog.decode(response.data);
        } else{
            //tratar erro
        }
    });

    CursoService.listCursos().then(function(response) {
        if(response.status == 200){
            $scope.cursosCadastrados = jsog.decode(response.data);
        } else{
            //tratar erro
        }
    });

    $scope.addRoteiro = function(novoRoteiro){
        CursoService.createRoteiro(novoRoteiro).then(function (response) {
            if(response.status == 200){
                $scope.cursos.push(novoRoteiro); //Isso não vai dar problema de inconsistência por n ter o id?
            } else{
                //Tratar erro com pop-up na tela.
            }
            delete $scope.roteiro;
        });
    }
}
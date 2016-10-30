angular.module('RDash')
    .controller('CursoController', ['$scope', 'CursoService', CursoController]);

function CursoController($scope, CursoService) {

    CursoService.listCursos().then(function(response) {
        if(response.status == 200){
            $scope.cursos = JSOG.decode(response.data);
        } else{
            //tratar erro
        }
    });

    $scope.addCurso = function(newCurso){
        jsogCurso = JSOG.encode(newCurso);

        CursoService.saveCurso(jsogCurso).then(function (response) {
            if(response.status == 200){
                $scope.cursos.push(JSOG.decode(response.data));
            } else{
                //Tratar erro com pop-up na tela.
            }
            delete $scope.curso;
        });
    }
}
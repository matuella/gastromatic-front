angular.module('Gastromatic')
    .controller('CursoController', ['$scope', 'CursoService', CursoController]);

function CursoController($scope, CursoService) {

    $scope.curso = {};
    $scope.pesquisaCurso = {};

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
            $scope.curso = {};
        });
    }
}
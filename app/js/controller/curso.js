var jsog = require('jsog');

module.exports = function ($scope, CursoService) {

    CursoService.listCursos().then(function(response) {
        if(response.status == 200){
            $scope.cursos = jsog.decode(response.data);
        } else{
            //tratar erro
        }
    });

    $scope.addCurso = function(novoCurso){
        jsogCurso = jsog.encode(novoCurso);

        CursoService.createCurso(jsogCurso).then(function (response) {
            if(response.status == 200){
                $scope.cursos.push(jsog.decode(response.data));
            } else{
                //Tratar erro com pop-up na tela.
            }
            delete $scope.curso;
        });
    }
}
module.exports = function ($scope, CursoService) {

    CursoService.listCursos().then(function(response) {
        if(response.status == 200){
            $scope.cursos = response.data;
        } else{
            //tratar erro
        }
    });

    $scope.addCurso = function(novoCurso){
        CursoService.createCurso(novoCurso).then(function (response) {
            if(response.status == 200){
                $scope.cursos.push(novoCurso); //Isso não vai dar problema de inconsistência por n ter o id?
            } else{
                //Tratar erro com pop-up na tela.
            }
            delete $scope.curso;
        });
    }
}
module.exports = function ($scope, CursoService) {

    CursoService.getCursos().then(function(response) {
        $scope.cursos = response.data;
    });
    // $scope.addCurso = function(curso) {
    // 	CursoService.create(curso);
    // 	curso = null;
    // };
}
angular.module('RDash')
    .service('CursoService', ['$http', '$log', 'config', CursoService]);

function CursoService($http, $log, config) {

    this.listCursos = function () {
        var listCursosPromise = $http.get(config.rootUrl + '/cursos');

        listCursosPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return listCursosPromise;
    }

    this.getCurso = function (cursoId) {
        var getCursoPromise = $http.get(config.rootUrl + '/cursos/' + cursoId);

        getCursoPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return getCursoPromise;
    }

    this.saveCurso = function (newCurso) {
        var saveCursoPromise = $http.post(config.rootUrl + '/cursos', newCurso);

        saveCursoPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return saveCursoPromise;
    }

    this.deleteCurso = function (deletedCursoId) {
        var deleteCursoPromise = $http.delete(config.rootUrl + '/cursos/' + deletedCursoId);

        deleteCursoPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return deleteCursoPromise;
    }
}

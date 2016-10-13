module.exports = function ($http, $log, config) {

    this.listCursos = function () {
        var listCursosPromise = $http.get(config.rootUrl + '/curso/list');

        listCursosPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return listCursosPromise;
    }

    this.getCurso = function (cursoId) {
        var getCursoPromise = $http.get(config.rootUrl + '/curso/find/' + cursoId);

        getCursoPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return getCursoPromise;
    }

    this.createCurso = function (newCurso) {
        var createCursoPromise = $http.post(config.rootUrl + '/curso/add', newCurso);

        createCursoPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return createCursoPromise;
    }

    this.deleteCurso = function (deletedCursoId) {
        var deleteCursoPromise = $http.delete(config.rootUrl + '/curso/delete/' + deletedCursoId);

        deleteCursoPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return deleteCursoPromise;
    }
}

module.exports = function ($http, $log) {

    var root = 'http://localhost:8080/gastromatic/curso';

    this.listCursos = function () {
        var listCursosPromise = $http.get(root + '/listCursos');

        listCursosPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return listCursosPromise;
    }

    this.createCurso = function (novoCurso) {
        console.log(novoCurso);
        var createCursoPromise = $http.post(root + '/addCurso', novoCurso);

        createCursoPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return createCursoPromise;
    }
}

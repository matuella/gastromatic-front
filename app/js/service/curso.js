module.exports = function ($http, $log) {

    var root = 'http://localhost:8080/gastromatic/curso';

    this.getCursos = function () {
        var cursosPromise = $http.get(root + '/listCursos');

        cursosPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return cursosPromise;
    }
}

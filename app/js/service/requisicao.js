module.exports = function ($http, $log, config) {

    this.listCursos = function () {
        var listCursosPromise = $http.get(config.rootUrl + '/curso/list');

        listCursosPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return listCursosPromise;
    }
}

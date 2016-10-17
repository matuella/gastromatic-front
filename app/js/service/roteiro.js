module.exports = function ($http, $log, config) {

    this.listRoteiros = function () {
        var listRoteirosPromise = $http.get(config.rootUrl + '/roteiro/list');

        listRoteirosPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return listRoteirosPromise;
    }

    this.listCursos = function () {
        var listCursosPromise = $http.get(config.rootUrl + '/curso/list');

        listCursosPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return listCursosPromise;
    }

    this.createRoteiro = function (newRoteiro) {
        var createRoteiroPromise = $http.post(config.rootUrl + '/roteiro/add', newRoteiro);

        createRoteiroPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return createRoteiroPromise;
    }

    this.deleteRoteiro = function (deletedRoteiroId) {
        var deleteRoteiroPromise = $http.delete(config.rootUrl + '/roteiro/delete/' + deletedRoteiroId);

        deleteRoteiroPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return deleteRoteiroPromise;
    }

}

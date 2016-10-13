module.exports = function ($http, $log, config) {

    this.listAulas = function () {
        var listAulasPromise = $http.get(config.rootUrl + '/aula/list');

        listAulasPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return listAulasPromise;
    }

    this.createAula = function (newAula) {
        var createAulaPromise = $http.post(config.rootUrl + '/aula/add', newAula);

        createAulaPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return createAulaPromise;
    }

    this.deleteAula = function (deletedAulaId) {
        var deleteAulaPromise = $http.delete(config.rootUrl + '/aula/delete/' + deletedAulaId);

        deleteAulaPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return deleteAulaPromise;
    }
}

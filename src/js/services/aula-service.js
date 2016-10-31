angular.module('Gastromatic')
    .service('AulaService', ['$http', '$log', 'config', AulaService]);

function AulaService($http, $log, config) {

    this.listAulas = function () {
        var listAulasPromise = $http.get(config.rootUrl + '/aulas');

        listAulasPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return listAulasPromise;
    }

    this.getAula = function (aulaId) {
        var getAulaPromise = $http.get(config.rootUrl + '/aulas/' + aulaId);

        getAulaPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return getAulaPromise;
    }

    this.saveAula = function (newAula) {
        var saveAulaPromise = $http.post(config.rootUrl + '/aulas', newAula);

        saveAulaPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return saveAulaPromise;
    }

    this.deleteAula = function (deletedAulaId) {
        var deleteAulaPromise = $http.delete(config.rootUrl + '/aulas/' + deletedAulaId);

        deleteAulaPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return deleteAulaPromise;
    }
}

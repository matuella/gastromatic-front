angular.module('Gastromatic')
    .service('RoteiroService', ['$http', '$log', 'config', RoteiroService]);

function RoteiroService($http, $log, config) {

    this.listRoteiros = function () {
        var listRoteirosPromise = $http.get(config.rootUrl + '/roteiros');

        listRoteirosPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return listRoteirosPromise;
    }

    this.saveRoteiro = function (newRoteiro) {
        var saveRoteiroPromise = $http.post(config.rootUrl + '/roteiros/', newRoteiro);

        saveRoteiroPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return saveRoteiroPromise;
    }

    this.deleteRoteiro = function (deletedRoteiroId) {
        var deleteRoteiroPromise = $http.delete(config.rootUrl + '/roteiros/' + deletedRoteiroId);

        deleteRoteiroPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return deleteRoteiroPromise;
    }
}

angular.module('Gastromatic')
    .service('InsumoService', ['$http', '$log', 'config', InsumoService]);

function InsumoService($http, $log, config) {

    this.listInsumos = function () {
        var listInsumosPromise = $http.get(config.rootUrl + '/insumos');

        listInsumosPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return listInsumosPromise;
    }

    this.getInsumo = function (insumoId) {
        var getInsumoPromise = $http.get(config.rootUrl + '/insumos/' + insumoId);

        getInsumoPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return getInsumoPromise;
    }

    this.saveInsumo = function (newInsumo) {
        var saveInsumoPromise = $http.post(config.rootUrl + '/insumos', newInsumo);

        saveInsumoPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return saveInsumoPromise;
    }

    this.deleteInsumo = function (deletedInsumoId) {
        var deleteInsumoPromise = $http.delete(config.rootUrl + '/insumos/' + deletedInsumoId);

        deleteInsumoPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return deleteInsumoPromise;
    }
}

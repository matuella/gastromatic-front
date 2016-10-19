module.exports = function ($http, $log, config) {

    this.listReceitas = function () {
        var listReceitasPromise = $http.get(config.rootUrl + '/receitas');

        listReceitasPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return listReceitasPromise;
    }

    this.getReceita = function (receitaId) {
        var getReceitaPromise = $http.get(config.rootUrl + '/receitas/' + receitaId);

        getReceitaPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return getReceitaPromise;
    }

    this.saveReceita = function (newReceita) {
        var saveReceitaPromise = $http.post(config.rootUrl + '/receitas', newReceita);

        saveReceitaPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return saveReceitaPromise;
    }

    this.deleteReceita = function (deletedReceitaId) {
        var deleteReceitaPromise = $http.delete(config.rootUrl + '/receitas/' + deletedReceitaId);

        deleteReceitaPromise.error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config);
        });

        return deleteReceitaPromise;
    }
}

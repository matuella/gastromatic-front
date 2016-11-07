angular.module('Gastromatic')
    .controller('InsumoController', ['$scope', 'InsumoService', InsumoController]);

function InsumoController($scope, InsumoService) {

    $scope.insumo = {};
    $scope.pesquisaInsumo = {};

    InsumoService.listInsumos().then(function(response) {
        if(response.status == 200){
            $scope.insumos = JSOG.decode(response.data);
        } else{
            //tratar erro
        }
    });

    $scope.addInsumo = function(newInsumo){
        jsogInsumo = JSOG.encode(newInsumo);

        InsumoService.saveInsumo(jsogInsumo).then(function (response) {
            if(response.status == 200){
                $scope.insumos.push(JSOG.decode(response.data));
            } else{
                //Tratar erro com pop-up na tela.
            }
            $scope.insumo = {};
        });
    }
}
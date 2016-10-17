/**
 * Created by guilh on 17/10/2016.
 */
var jsog = require('jsog');

module.exports = function ($scope, RequisicaoService) {

    RequisicaoService.listCursos().then(function(response) {
        if(response.status == 200){
            $scope.cursosDisponiveis = jsog.decode(response.data);
        } else{
            //tratar erro
        }
    });

    // $scope.checkAll = function() {
    //     $scope.user.roles = angular.copy($scope.roles);
    // };
    // https://vitalets.github.io/checklist-model/

}
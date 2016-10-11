'use strict';

module.exports = function(){
	
	var baseUrl = 'http://localhost:8080/gastromatic/';
	this.test = function () {
		return "TESTE CONEXÃO SERVICE-CONTROLLER COM BROWSERIFY";
	}

	
//	var Curso = $resource('/api/1/todo/:id');
// 	var Curso = $resource('http://localhost:8080/gastromatic/curso/:id');
	
//    return $resource(baseUrl + 'curso/', {}, {
//        get: { method: 'GET'},
//        query: { method: 'GET', isArray: true },
//        create: {method: 'POST'},
//        edit: {method: 'PUT'},
//        delete: {method: 'DELETE'}
//    });
}

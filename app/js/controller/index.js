var app = require('angular').module('gastromaticApp');

app.controller('CursoController', require('./curso'));
app.controller('RoteiroController', require('./roteiro'));
app.controller('AulaController', require('./aula'));
app.controller('ReceitaController', require('./receita'));
app.controller('RequisicaoController', require('./requisicao'));
var app = require('angular').module('gastromaticApp');

app.service('CursoService', require('./curso'));
app.service('RoteiroService', require('./roteiro'));
app.service('AulaService', require('./aula'));
app.service('ReceitaService', require('./receita'));
app.service('RequisicaoService', require('./requisicao'));
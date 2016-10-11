var express = require('express');
var app = express();

app.set('port', process.env.PORT || 8080);
app.use(express.static(__dirname + '/app/'));

var server = require('http').createServer(app);
server.listen(app.get('port'), function(){
    console.log('Express server listening on port :' + app.get('port'));
});
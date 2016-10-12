var express = require('express');
var app = express();

app.set('port', process.env.PORT || 8079);
app.use(express.static(__dirname + '/app/'));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
});

var server = require('http').createServer(app);
server.listen(app.get('port'), function(){
    console.log('Express server listening on port :' + app.get('port'));
});
'use strict';

var express = require('express');
var http = require('http');

var train = require('./routes/train.js');

var app = express();
var server = http.createServer(app);

/* Configuration */
// app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

if (process.env.NODE_ENV === 'development') {
  app.set('port', (process.env.PORT || 3000));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
} else {
  app.set('port', (process.env.PORT || 80));
}

app.get('/train', function(req, res){
  var params = req.params;
  res.send(params);
});

/* Start server */
server.listen(app.get('port'), function (){
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;

var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(__dirname + '/public'));
app.all('/', function(req, res) { res.sendFile(path.join(__dirname, '/public', 'index.html')); });

var port = process.env.PORT || 8000;
app.listen(port, function() { console.log('Listening at: ' + port)});

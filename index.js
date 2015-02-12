var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));
app.post('/', function(req, res) { res.render('public/index.html'); });

var port = process.env.PORT || 8000;
app.listen(port, function() { console.log('Listening at: ' + port)});

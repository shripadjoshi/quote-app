var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname+'/index.html');
});


var port = 3000;

var server = app.listen(port, function(request, response) {
  console.log("Server is up and running on http://localhost:"+port);
});
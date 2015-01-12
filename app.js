var http = require('http');
var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'client')));

var http_srv = http.createServer(app).listen(3000);
console.log('Started, listening on port: 3000');

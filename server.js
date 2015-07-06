///*
// ======express module======
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose'),
    express = require('./config/express');
    passport = require('./config/passport');


var db = mongoose();
var app = express();
var passport = passport();

app.use('/', function(req, res) {
                                  res.send('Hello World');
                                }
       );

app.listen(3000, '0.0.0.0');
console.log('Server running at http://0.0.0.0:3000/');

module.exports = app;
//*/









/*
var http = require('http');
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }).listen(3000, '0.0.0.0');
  console.log('Server running at http://0.0.0.0:3000/'); 
  */


/*
// ======Connect module======
var connect = require('connect');
var app = connect();
app.listen(3000, '0.0.0.0'); 

console.log('Server running at http://0.0.0.0:3000/');  
*/



/*

//var connect = require('connect');
//var app = connect();

var connect = require('express');
var app = express();


var logger = function(req, res, next) {
  console.log(req.method, req.url);

  next();
};

var helloWorld = function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
};

var goodbyeWorld = function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Goodbye World');
};

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.listen(3000, '0.0.0.0');

console.log('Server running at http://0.0.0.0:3000/');


*/
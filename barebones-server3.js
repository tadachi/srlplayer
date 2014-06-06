var express 		= require('express');
var bodyParser 		= require('body-parser');
var methodOverride  = require('method-override');
var port			= parseInt(process.env.PORT, 10) || 4000;
var fs 				= require('fs');
var path			= require('path');
var router 			= express.Router();
var vhost 			= require('vhost');
var app 			= require('express.io')();
app.http().io();

//var io = io.connect();

app.use(bodyParser());
app.use(methodOverride());
app.listen(port);
app.enable('trust proxy');

var home = require('express.io')();

home.use('/js', express.static(__dirname + '/app/js'));
home.use('/css', express.static(__dirname + '/app/css'));
home.use('/img', express.static(__dirname + '/app/img'));
home.use('/test', express.static(__dirname + '/app/test'));

app.use(vhost('srl.tak.com', home));

home.get('/', function(req, res) {
	res.sendfile(__dirname + '/app/index.html');
	req.io.route('home');
})

/* Outputs the users' ips visiting your website*/
app.io.route('home', function (req) {
	console.log(req.ip);
});

/* Debug */
console.log(__dirname);
console.log(__dirname + '/app/');
console.log('Listening on port: ' + port);


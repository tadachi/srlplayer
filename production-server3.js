var express 	= require('express');
var bodyParser 	= require('body-parser');
var methodOverride = require('method-override');
var app 		= express()
var port		= parseInt(process.env.PORT, 10) || 4000;
var fs 			= require('fs');
var path		= require('path');
var router 		= express.Router();
var vhost = require('vhost');

var srl = express();
var home = express();

app.use(bodyParser());
app.use(methodOverride());

srl.use(express.static(__dirname + '\\app\\'));		//srl
//home.use(express.static(__dirname)); 				//homepage

app.use(vhost('srl.takbytes.com', srl));
app.use(vhost('srl.tak.com', srl));
//app.use(vhost('www.takbytes.com', home));

app.listen(port);

/* Debug */
console.log(__dirname);
console.log(__dirname + '\\app\\');
console.log('Listening on port: ' + port);
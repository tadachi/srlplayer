var express 	= require('express');
var bodyParser 	= require('body-parser');
var methodOverride = require('method-override');
var app 		= express()
var port		= parseInt(process.env.PORT, 10) || 4000;
var fs 			= require('fs');
var path		= require('path');
/*
app.get("/", function(req, res) {
  res.redirect("/index.html");
});
*/

/*
var env = process.env.NODE_ENV || 'dev';
if ('dev' == env {

}
*/

app.listen(port);

app.use(express.static(__dirname));
app.use(bodyParser());
app.use(methodOverride());
console.log(__dirname);

/*
app.get('/index.html', function(req, res) {
	res.end('./index.html')
});

app.post('/index.html', function(req, res) {

});
*/


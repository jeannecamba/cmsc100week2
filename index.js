var express = require('express');
var app = express();

var server = app.listen(5000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});


/*
app.get('/', function (req, res) {
	res.send('Hello World!');
});
*/


/*
app.route('/students')
	.get(function(req, res) {
		res.send('Get a student'); })
	.post(function(req, res) {
		res.send('Add a student'); })
	.put(function(req, res) {
		res.send('Update a student'); });
*/


app.use(require('body-parser')()); //must be installed first
app.use(require('method-override')()); //must be installed first
app.use(require(__dirname + '/config/router')(express.Router()));
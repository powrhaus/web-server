var express = require('express');
var app = express();
var port = 3111;

var middleware = require('./middleware');

// Application level middleware - all routes covered
// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// app.get('/', function(req,res) {
//     res.send('Hello Express!');
// });

// original /about route
//app.get('/about', function(req,res) {

// route level middleware
app.get('/about', middleware.requireAuthentication, function(req,res) {
    res.send('Fudgesicle!!!!!!!!!!!!!!!!!!!!!');
});
// console.log(__dirname);

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
    console.log('Express Server started on port ' + port);
});


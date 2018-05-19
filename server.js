var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function(req, res) {
	res.render('content');
});

app.get('/views', function(req, res) {
	res.render('welcome');
});
	
app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
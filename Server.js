var express = require ('express');
var app = express();
var port = process.env.PORT;
var path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'client', 'views'));

app.get('/', function(req, res){
	res.render('index.ejs');
});

/*app.use(express.logger());
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.render('/views/home.html');
});*/


app.listen(port, process.env.IP, function(){
console.log("Server UP@ Port :" + port);
});
var express = require ('express');
var app = express();
app.get('/cars', function(request, response){
	response.send([{name:'Mercedes'}, {name:'Audi'}]);
});

app.get('/cars/:id', function(req, res) {
	if(req.params.id==1){
		res.send({id:req.params.id, name: "BMW", description: "description"});
	}
	else{
		res.send({id:req.params.id, name: "AlfaRomeo", description: "description"});
	}
    
});

app.listen(3000);
console.log('Listening on port 3000...');
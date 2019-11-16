console.log("...Try REST API....");
var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var car = [
{
    id: 1,
    name: "Nissan Z370",
    brand: "Nissan",
    color: "red",
    year: 1997
},
{
    id: 2,
    name: "Toyota Supra",
    brand: "Toyota",
    color: "red",
    year: 2003
},
{
    id: 3,
    name: "BMW M3 GTS",
    brand: "BMW",
    color: "black",
    year:2007
}
];
//GET
app.get('/',function(req,res){
    res.send("Get Request at /");
});
app.get('/mycar',function(req,res){
    console.log("Ger car as json");
    if(req.query.year){res.send("Found your Year: " + req.query.year);}
    else res.json(car);
});
app.get('/mycar/:id',function(req,res){
    console.log("Sending car with the ID : "+req.params.id);
    res.send("It is your car . and its ID is : "+req.params.id);
});

//POST
app.post('/mycar',function(req,res){
    console.log("Displaying a new Car : "+req.body.name);
    res.json(req.body);
});

app.listen(port,function(){console.log("Listening on port " + port);});
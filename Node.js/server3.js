console.log("...Try Routes....");
var express = require('express');
var app = express();
var port = 2999;

app.get('/',function(req,res){
    res.send("Hello Express in /");
});
app.get('/express',function(req,res){
    res.send("Hello Express in /express");
});

app.listen(port,function(){console.log("Listening on port " + port);});
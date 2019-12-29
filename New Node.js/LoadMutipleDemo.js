var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req,res){
    var q = url.parse(req.url,true);
    console.log("Now redirect to "+q.path);
    if(q.path=="/"){
        res.writeHead(200,{"Content-type" : "text/html"});
        res.write("Default Page");
    }
    else if(q.path=="/1"){
        fs.readFile("myDemo.html",function(err,data){
            res.writeHead(200,{'content-type' : 'text/html'});
            res.write(data);
        })
    }
    else if(q.path=="/2"){
        fs.readFile("myDemo2.html",function(err,data){
            res.writeHead(200,{'content-type' : 'text/html'});
            res.write(data);
        })
    }
    else{
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write("Wrong URL");
    }          
}
).listen(3000);
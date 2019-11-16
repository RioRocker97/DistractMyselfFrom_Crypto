console.log("...Open some port....");
var http = require('http');
var port = 3000;

var requesthandler = function(req,res){
    console.log("New Request to : " + req.url);
    res.end("Hello, New Connection");
}

var server = http.createServer(requesthandler);

server.listen(port,function(){console.log("Listening on port " + port);});
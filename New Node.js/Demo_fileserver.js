var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var filename = '.'+q.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'content-type' : 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        console.log("Now Reading "+ filename);
        return res.end();
    });
}).listen(3000);
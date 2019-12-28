//basic input from URL
//http://localhost:3002/?name=...&sname=...
var http = require('http');
var url = require('url');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    //res.write(req.url);
    var q = url.parse(req.url, true).query;
    var txt = q.name + " " + q.sname;
    res.write(txt);
    res.end();
}).listen(3002);
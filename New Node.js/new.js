

var http = require('http');
var mt = require('./mt');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Today is :"+mt.myTime()+"\n");
    res.write("Hello World");
    res.end();
}).listen(3000);
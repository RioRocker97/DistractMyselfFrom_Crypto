var http = require('http');
var uc = require('upper-case');

http.createServer(function (req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(uc.upperCase("I just used Upper-case package to make this text all upper-case"));
    res.end();
}).listen(3000);
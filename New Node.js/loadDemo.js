var http =require('http');
var fs = require('fs');

http.createServer(function (req,res){
    fs.readFile('myDemo.html',function(err,data){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3000);
console.log('loading...');
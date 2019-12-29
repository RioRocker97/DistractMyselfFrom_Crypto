var url = require('url');
var http = require('http');

http.createServer(function (req,res){
    var q = url.parse(req.url,true);
    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);

    var qdata = q.query;
    console.log(qdata);
}).listen(3000);

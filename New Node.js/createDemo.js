var http = require('http');
var fs = require('fs');

fs.appendFile('myText1.txt',
    'Hello Everyone\n'+
    'This is my new file',
    function (err){
        if (err) throw err;
        console.log('File Created');

});

fs.open('myText1.txt','w',function(err,file){
    if(err) throw err;
    console.log('File Open');
});

fs.writeFile('myText2.txt','Hi, My file number 2',function(err){
    if(err) throw err;
    console.log('File Writed');
}
);
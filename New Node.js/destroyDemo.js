var fs = require('fs');
// first create new file to be deleted
fs.writeFile('myText3.txt','one two three',function(err){
    if(err) throw err;
    console.log('New File created');
});
fs.writeFile('myText4.txt','one two three',function(err){
    if(err) throw err;
    console.log('New File created');
});
// second , rename that file
fs.rename('myText3.txt','myNewOne1.txt',function(err){
    if(err) throw err;
    console.log('File Renamed');
});
// lastly , delete some file
fs.unlink('myText4.txt',function (err){
    if(err) throw err;
    console.log('File Deleted');
});

//ALL of thest operation only work if none of thest file existed so... make sure it not existed
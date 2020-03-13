const _ = require("underscore")

var name = ['Chang','Jame','Jack']
var number = [2,4,6]
_.map(name,function(word){
    console.log("This is",word);
    return word + " default";
})
_.map(number,function(n){
    return n*2;
})
for(i=0;i<3;i++){
    console.log(name[i])
}
console.log(number)

// try it on browser to see the TRUE result
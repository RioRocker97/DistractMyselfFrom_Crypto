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
var name_edit = []
_.filter(name,function(n){
    n+="Noi"
    if(n != 'ChangNoi'){
        name_edit.push(n)
        return true;
    }
})
console.log(name_edit)
// _.filter() good for sorting value through list and return that TRUE list

//ES6 arrow function
// ... < spread operator . use it to SPREAD the remaining arguments 
//that not declare in function statement
var parrot = (...word) => {
    //console.log(arguments);
    console.log("The Parrot say :",word)
};

parrot("Kaw Kaw",12)
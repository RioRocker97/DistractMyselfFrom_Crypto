// create an Object called Person
var person = {
    name: "sLIM SHADY",
    surname: "mother fucker",
    age : 25

};
var mycar = {
    type: "Sport",
    brand: "tOYOTA",
    speed: "super",
    color: "Red"
};
var manyfx = {
    plus1: function myplus1(a){
        return a+1
    },
    plus2: function myplus2(a){
        return a+2
    }
};
//document.write(person.name,'<br>');
//document.write(mycar.color);
var thisspeed = mycar.speed
mycar.speed = "Faster than light"

console.log(thisspeed)
console.log(mycar.speed)
console.log("This is",manyfx.plus1(15))
console.log("This is",manyfx.plus2(15))
const _ = require("underscore");
function CreatemycarObject(n){
    return{
        name : n[0],
        brand : n[1],
        moving(){ console.log(n[0], "is running.");}
    }
}

toyota = ['AE86','Toyota'];
nissan = ['Fairlady Z','Nissan'];
ford = ['Ford Mustang','Ford'];

lambo = ['Lambogini Labadro','Lambogini'];
mazda = ['Rx-8','Mazda'];
benz = ['Mercedes Benz A900','Mercedes Benz'];

var all_car_raw = [toyota,nissan,ford];
var all_car = [];

var all2_car_raw = [lambo,mazda,benz];
var all2_car = [];

all_car_raw.forEach(function(n){
    all_car.push(CreatemycarObject(n))
});

_.each(all2_car_raw,function(n){
    all2_car.push(CreatemycarObject(n))
});

for(i=0;i<3;i++){all_car[i].moving()}
console.log()
for(i=0;i<3;i++){all2_car[i].moving()}
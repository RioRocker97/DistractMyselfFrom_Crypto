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

var all_car_raw = [toyota,nissan,ford];
var all_car = [];

all_car_raw.forEach(function(n){
all_car.push(CreatemycarObject(n))
});

for(i=0;i<3;i++){all_car[i].moving()}
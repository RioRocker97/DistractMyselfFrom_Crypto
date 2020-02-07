var car = 'Mitsubishi AE160'
var country = 'Japan'
var num = 10
function showcar(a,b){
    console.log('Here is my car. It is ' + a + '\nIt is made from ' + b)
}
showcar(car,country)
function addnum(a){
    setTimeout(function wait(){
        a = a+1
        console.log('it is now ' + a)
    },500)
}
console.log(isNaN(num))
console.log(addnum(10))
console.log(num)
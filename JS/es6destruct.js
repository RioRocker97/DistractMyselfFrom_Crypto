//ES6 destructiing is the way to declare variable in mutiple variable in one bracket []
// This could be useful when i want to create complex obj.
var myfood = {
    seafood : "Squid",
    junkfood : "chicken tendies",
    cleanfood : "vegetable"
}
var [a,b,c] = [myfood.seafood,myfood.junkfood,myfood.cleanfood]
const [first,second] = [true,false]
let [food,car] = ['junk food','Mazda']
var [grade,allowance,year] = [3.99,30000]

const x = {f: 10}
Object.freeze(x)
x.f = 15
x.y = 20
console.log(x)

console.log(first)
console.log(food)
console.log(grade)
console.log(year)
year = 2020
console.log(year)

console.log(a)
console.log(b)
console.log(c)
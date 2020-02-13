var food = {
    myfood : [
        {
            food1 : "chicken tendies",
            food2 : "Pizza hut"
        },
        {
            food1 : "Food 3",
            food2 : "Food 4"
        }
    ]
}
//var [peter,patrick] =[food.myfood[0].food1,food.myfood[1].food1]
var [{food1: peter},{food1:patrick}] = food.myfood
console.log(peter)
console.log(patrick)
console.log(food.myfood)
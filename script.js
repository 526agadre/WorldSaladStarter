alert
let userName = prompt('What is your name')
let Restaurant = prompt ('list a restaurant')
let FoodItem = prompt ('list a food item')
let foodItem = prompt ('list a food item')
let DrinkItem = prompt ('list a food item')
console.log(userName)
console.log(Restaurant)
console.log(FoodItem)
console.log(DrinkItem)
let myStory = `Hello, ${userName}, we both should go to ${Restaurant} and other ${FoodItem}, ${FoodItem}, ${DrinkItem} `
console.log(myStory)
document.getElementById('story').innerHTML = myStory;
const fruits = {Bananas:300, Oranges:200, Apples:500}; 
const person = {
  name: "Yashwanth",
  age: 20,
  city: "Tiptur"
};

//Using Object.values
let array = Object.values(fruits);
console.log(array);
// (3) [300, 200, 500]
console.log(typeof array); //object

//Using Object.entries
let text = "";
for(let [fruit, value] of Object.entries(fruits)){
  text += fruit + ": " + value + "\n";
}
console.log(text);
// Bananas: 300
// Oranges: 200
// Apples: 500

let myString = JSON.stringify(person);
console.log(myString);
// {"name":"Yashwanth","age":20,"city":"Tiptur"}




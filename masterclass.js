//printing a message
console.log("Hello!")

//comments
//this is a comment

//printing with variable
//use only in chrome browser because prompt is a window object
//explain const vs let
//`const` is a signal that the identifier won't be reassigned. `let` is a signal that the variable may be reassigned, 
let username = prompt("What is your name?");
console.log('Hello ', username)

//data types
const boolean_value = true
const number_value = 28
const string_value = 'test'
const object_value = { "first_name": "cleo", "last_name": "credo"}
console.log("boolean_value: ", typeof boolean_value)
console.log("number_value: ", typeof number_value)
console.log("string_value: ", typeof string_value)
console.log("object_value: ", typeof object_value)

//arithmetic operators
const first_number = 20
const second_number = 5
console.log("add: ", first_number + second_number)
console.log("sub: ", first_number - second_number)
console.log("mul: ", first_number * second_number)
console.log("div: ", first_number / second_number)
console.log("mod: ", first_number % second_number)

//modulo operator
let num = 15
if(num % 2 == 0){
    console.log("number is even")
}else{
    console.log("num is odd")
}

//comparison operator
let age = 25
console.log(age)
if(age > 0 && age < 13){
    console.log('kid')
}else if(age > 12 && age < 20){
    console.log('teen')
}else if(age > 19 && age < 26){
    console.log('young adult')
}else if(age > 25){
    console.log('adult')
}

//arrays
let groceries = ["ketchup", "rice", "mayonnaise", "pork", "toothpaste"]
console.log("groceries: ", groceries)
console.log(groceries[0])
groceries[0] = "beef"
console.log("groceries: ", groceries)
groceries.push("pork")
console.log("groceries: ", groceries)
console.log("length of groceries: ", groceries.length)
let last = groceries[groceries.length - 1];
console.log("last: ", last)
groceries.pop()
console.log("groceries: ", groceries)
console.log(groceries.slice(1)) //first element
groceries.splice(1, 0, 'Soy Sauce'); // inserts at index 1, delete count 0
console.log("groceries: ", groceries)
groceries.splice(4, 1, 'Pepper'); // replaces 1 element at index 4
console.log("groceries: ", groceries)

//loops
//do while
let text = "";
let i = 0;
do {
  text = "The number is " + i;
  console.log(text)
  i++;
}
while (i < 5);

//while
let text = "";
let i = 0;
while (i < 10) {
  text = "The number is " + i;
  console.log(text)
  i++;
}

//for loop
let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text = "";
let i;
for (i = 0; i < cars.length; i++) {
  text = cars[i];
  console.log(text)
}

//functions
function greet(name){
    return "Hello " + name
}


function isOddOrEven(number){
    if(number % 2 == 0){
    console.log("number is even")
    }else{
        console.log("num is odd")
    }
}
isOddOrEven(45)
console.log(greet("Cleo"))

// Exercise 1: Write a Function with Default Parameters
// Problem: Write a function called greetUser that takes a name and an optional
//  greeting parameter (defaulting to "Hello"). 
// The function should return a string in the format: "[greeting], [name]!".

function greetUser(name,greeting="hello"){
    return `${greeting} ${name}`;
}
console.log(greetUser("James"));

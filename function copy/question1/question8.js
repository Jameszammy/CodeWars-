// Exercise 4: Write a Higher-Order Function to Apply a Callback
// Problem: Write a function called applyToArray that takes an array of numbers and
//  a callback function as input. 
// The function should apply the callback to each element of the array and 
// return a new array with the results.
function applyToArray(arr,callback){
return arr = arr.map(callback);
}
const double = num =>num * 2;
console.log(applyToArray([3,5],double));

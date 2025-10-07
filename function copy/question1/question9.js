// Exercise 5: Write a Function to Merge and Sort Object Arrays
// Problem: Write a function called mergeAndSort that takes two arrays of objects, 
// where each object has a value property (a number).
//  The function should merge the arrays and return a new 
// array sorted by the value property in ascending order.
function mergeAndSort(arr1,arr2){
    const extractValue = obj => ({ value: Object.values(obj)[0] });
  const combined = arr1.concat(arr2).map(extractValue);
    return combined.sort((a,b)=>a.value - b.value);
} console.log(mergeAndSort([{value:5},{value:3}],[{value:10},{value:1}]));

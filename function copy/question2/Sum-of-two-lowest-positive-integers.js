// Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an 
// array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//Approach 1
function sumTwoSmallestNumbers(numbers) {  
  let towLowest = [0];
  towLowest = numbers.sort((a,b)=>a-b).reduce((a,b)=>a[0]+b[1]);;
  
  return towLowest;
  
}
console.log(sumTwoSmallestNumbers([19,5,24,2,77]));

//Approach 2

function sumTwoSmallestNumbers(numbers) {  
  let towLowest = numbers.sort((a,b)=> a-b);
  return towLowest[0] + towLowest[1];
  
}
console.log(sumTwoSmallestNumbers([19,5,24,2,77]));
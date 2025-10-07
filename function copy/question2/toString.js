// The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for the following data types.

// I. Booleans
// For booleans:

// true should be converted to "true"

//Question I bollean to string
let bulToString = true;
let outPut=bulToString.toString();
console.log(`"${outPut}" ${typeof outPut}`);

let bulToString1 = false;
let outPut1=bulToString1.toString();
console.log(`"${outPut1}" ${typeof outPut1}`);

// Number to string

let num = 8;
let numberToSTRING = num.toString();
console.log(`"${numberToSTRING}" ${typeof numberToSTRING}`);

// Array of numbers to string
let arrayOfNumber = [2,3,4,5];
const result = arrayOfNumber.toString().split('').join("");
 let results="[]";
for(let i=0;i<result.length;i++){
if(result[i]===results){
 results.push(result[i]);
};
}

const numbers = [1, 2, 3, 4, 5];

// Method 1: Using String constructor
const stringArray = numbers.map(String);
console.log(stringArray);

// Method 2: Using .toString()
const stringArrayAlt = numbers;
let newsrt = `"[${stringArrayAlt.join(",")}]"`;
console.log(newsrt, typeof newsrt); // ["1", "2", "3", "4", "5"]
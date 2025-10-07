// Exercise 2: Write an Arrow Function to Filter Positive Numbers
// Problem: Write an arrow function called getPositives that takes an array of numbers
//  and returns a new array containing only the positive numbers (greater than 0).
const getPositives =(arr)=>{
    let arr1 = arr.filter(num=>num>0);
    let arr2 = arr.filter(num=>num>0).reduce((num1,num2)=>num1 + num2,0);
    return `${arr1} Sum: ${arr2}`;
}
console.log(getPositives([1,-2,4,6,-9]));


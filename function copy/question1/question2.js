// Exercise 3: Write a Function to Find the Minimum of an Array
// Problem: Write a function called findMin that takes an array of numbers as input and
//  returns the smallest number in the array. Assume the array is non-empty.

function findMin(array){
    let newArry =array[0];
    for(let i=0;i<array.length;i++){
        if(array[i]<newArry){
newArry =array[i];
        }
    }
    return newArry;
}
console.log(findMin([8,2,3,4]));

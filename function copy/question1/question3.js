// Exercise 3: Write a Function to Find the Maximum of Three Numbers
// Problem: Write a function called find_max that takes three numbers as input and returns the largest one.
function findMax(arr){
let max = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
return max;
}
console.log(findMax([2,3,4,8,10]));
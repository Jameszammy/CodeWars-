// // Removing Elements
// // Take an array and remove every second element from the array. 
// // Always keep the first element and start removing with the next element.

//  Example:
//  ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

//Approche 1
function removeEveryOther(arr){
    let newArray =arr.filter((_,index)=> index %2===0);
 return newArray;
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

//Approche 2
function removeEveryOther(arr){
  var newArr=[];
for (var i = 0; i < arr.length; i+=2){
  newArr.push(arr[i]);
  }
return newArr;
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
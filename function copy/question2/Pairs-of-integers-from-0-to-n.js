
// Write a function that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the condition

// 0 <= a <= b <= n
// The pairs should be sorted by increasing values of a, then by increasing values of b.
const generatePairs=n=>{
    const result = [];
    for(let a=0; a<=n;a++){
        for(let b=a;b<=n;b++){
           result.push([a,b]);     
        }
        
    }
    
  return result;
}
console.log(generatePairs(1));
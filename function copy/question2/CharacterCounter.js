// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

const validateWord=(s)=>
{
 const normalize = s.toLowerCase();
  
  const freqmap = {};
  for(let char of normalize){
    freqmap[char]=(freqmap[char]||0)+1;
  }
  const frequencies = Object.values(freqmap);
  
  return frequencies.every(freq=>freq===frequencies[0]);
}
console.log(validateWord("aabb"));
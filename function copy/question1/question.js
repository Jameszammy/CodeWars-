// Exercise 2: Write a Function to Check if a String is a Palindrome
// Problem: Write a function called isPalindrome that takes a string as
//  input and returns true if the string is a palindrome 
// (reads the same forward and backward, ignoring case), and false otherwise.
function isPalindrome(str){
    let newString = str.toLowerCase();
    return newString === newString.split('').reverse().join("");
}
console.log(isPalindrome("lol"));


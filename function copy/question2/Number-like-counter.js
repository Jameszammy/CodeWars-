// You're going to implement a simple counter class. The counter will start at zero, and every time its incr method is called, it will increase by 1.

// There's one caveat: Your counter must act like a number and support arithmetic operations and comparisons.

// For example:

// function Counter(){
// this.count =0;
// }

// Counter.prototype.incr = function() {
// return this.count++;
// }

// const c= new Counter();
// console.log(c.incr());

function shorterReverseLonger(a,b){
  let newString =" ";
  if(newString=a.length<b.length){
    return a+b;
  }else{
    console.log(b+a);
  }
  return newString;
}
console.log(shorterReverseLonger("birthday", "pre"));
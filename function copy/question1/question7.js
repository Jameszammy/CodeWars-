const sumOfPositiveNumber = (arr)=>{  
return arr.reduce((sum,num)=> {if(num>0){
sum+=num;
}
return sum;
},0 );
}
console.log(sumOfPositiveNumber([2,-3,9,1,-8]));
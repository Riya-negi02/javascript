const balance= new Number(100);
console.log(balance); //print 100 with type

console.log(balance.toString().length()); //convert number to string and find it's length
console.log(balance.toFixed(2)); // 100.00 

const othernum= 23.8966
console.log(othernum.toPrecision(3)); //23.9 round off and print only 3 digits

const hundred= 1000
console.log(hundred.toLocaleString('en-IN')); //1,000

// -------------------Maths--------------------
console.log(Math.abs(-4)); //4
console.log(Math.round(4.3));
//can do all the math functions

console.log(Math.random()); // value will be between 0 and 1
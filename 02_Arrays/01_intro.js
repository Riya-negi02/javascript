const myArr = [0, 1, 2, 3, 4]

const myArr2= new Array(1,2,3,4) // to initialize

myArr.push(6); // append the array
myArr.pop(); // remove last value
myArr.unshift(0); // add element at start of array shifting other elements(not reccomended)
const newArr= myArr.join() //changes type of array

//slice (if take out a section doesn't change the original array),
// splice (it manipulates the orginal array by removing the section)
console.log(("A", myArr));

const myn1= myArr.slice(1,3)

console.log(myn1);  //[1,2]
console.log("B", myArr);

const myn2= myArr.splice(1,3)
console.log(myn2); //[1,2,3]

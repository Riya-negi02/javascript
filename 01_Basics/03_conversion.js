let score=33
console.log(typeof score);
// const {score} = req.body
let valueInNumber = Number(score)  //string to number conversion
console.log(typeof valueInNumber);

//"33" => 33
//"33abc"=> NaN
//true=>1

let isLoggedIn = 1

let booleanisLoggedIn= Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

let someNumber= 33
let stringNumber= String(someNumber)
console.log(stringNumber);

//operations
let value =3
let negvalue = -value
console.log(negvalue); // will give negative of the value

//string concatenation is allowed
//concatenation number and string is allowed

console.log("1"+ 2 + 2) //it's giving 122
console.log(1 + 2 + "2") // it's giving 32
//function declaration
// function saymyname(){
//     //code
// }

// saymyname() //calling

// function add(number1, number2){
//     console.log(number1 + number2);    
// }

function add(number1, number2){
    let result = number1 + number2
    return result
}

console.log(result);  

//rest operator
function calculateCartPrice(...num1){
     return num1
}
console.log(calculateCartPrice(200, 300, 400));

//object handling
const user= {
    username: "hitesh",
    price: 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user)

//array handling
const myNewArray= [200, 400, 200]
function returnSecond(getArray){
    return getArray[1]
}
console.log(returnSecond(myNewArray));

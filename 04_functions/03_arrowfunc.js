const user = {
    username: " riya",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to this website`);
        
    }
}
user.welcomeMessage();
//to access variable inside that scope we use this

user.username= "sam"
user.welcomeMessage() //value will be changed

//arrow function
const addTwo= (num1, num2)  => {
    return num1 + num2         //explicit return
}
addTwo(3, 4)

//one more way(inplicit return)
// const addTwo= (num1, num2)  => (num1 + num2)
    

//Immediately invoked Fucntion Expressions (IIFE)
(function chai(){
    console.log(`DB connected`);
    
}) ();
//used to remove pollution of global scope
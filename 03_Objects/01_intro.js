//singleton 

//object literals
//Object.create //contrustor method

const mySym= Symbol("key1")

const JsUser= {
    name: "riya",
    [mySym] : "mykey1",    
    age: 18,
    location: "jaipur",
    email: "riya@gmail.com",
    isloggedin: false,
} 
JsUser.email= "riya1@gmail.com"     //can override a value

//Object.freeze(JsUser)            //now we can't override the keys

//access objects
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

//function declaration
JsUser.greeting= function(){
    console.log("hello js user");
}
console.log(JsUser.greeting);  //gives reference
console.log(JsUser.greeting());   //gives the value

JsUser.greeting2= function(){
    console.log(`hello js user, ${this.name}`);    //to refer same object we use this and it iwll give all the property inside that object
}
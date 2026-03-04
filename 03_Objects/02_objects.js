const tinderuser = {}

tinderuser.id= "123abc"
tinderuser.name= "vishant"
tinderuser.isLoggedIn= false

//object inside an object 
const regularuser= {
    email: "some@gamil.com",
    fullname: {
        userfullname: {
            firstname: "vishant",
            lastname: "singh"
        }
    }
}

console.log(regularuser.fullname.userfullname.firstname)

const obj1= {1:'a', 2:'b'}
const obj2= {3: 'c', 4:'d'}

const obj3= Object.assign({}, obj1, obj2)  //empty bracket is target object and rest are sources, 
// all the values from soruces are going to target 

console.log(Object.keys(tinderuser));  //all keys in an array

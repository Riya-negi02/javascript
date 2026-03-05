//for of
const array= [1,2,3,4,5]

for (const element of array) {
    //code
}

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by appl',
}

for (const key of myObject) {
    console.log(key);        //give values of keys
    
}

//for in
const programming = ['js', 'rb', 'py', 'java', 'cpp']
for (const key in programming) {
     console.log(key);     //gives keys
     
}

//for each
const coding=['js', 'rb', 'py', 'java', 'cpp']
coding.forEach( function (item) {})  //take each value as parameter
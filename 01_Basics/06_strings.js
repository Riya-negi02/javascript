const name="riya"
const repocount= 8

//console.log(name + repocount +"value");
//backticks makes placeholder for variables (string interpolation)
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename= new String('riyanegi')
console.log(gamename[0]);
console.log(gamename.__proto__); // to access method

console.log(gamename.length);
console.log(gamename.toUpperCase());

const newstring= gamename.substring(0,4); //riya
const anotherstring= gamename.slice(-7,4);//ige
console.log(newstring.trim()); // removes start end spaces

const url= "https://hitesh.com/hitesh%20ch"
url.replace('%20', '-');
url.includes('after');  //true or false
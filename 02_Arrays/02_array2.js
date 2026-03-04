const marvel_heros= ["thor", 'ironman', 'spiderman']
const dc= ['superman', 'flash', 'batman']

marvel_heros.push(dc)
//console.log(marvel_heros); //array inside marvel array

const allheros=marvel_heros.concat(dc)
//console.log(allheros); // merged array

//spread 
const all_new_heros = [...marvel_heros, ...dc]    // element got spread(individual)

const anotherarray= [1,2,3,[4,5,6],7,[6,7[4,5]]]
const real_another_array= anotherarray.flat(Infinity)  // will make array inside array in flat version

Array.isArray('riya') //gives true false
Array.from('riya')  // covert into an array

let score1= 100
let score2= 300
let score3= 600

console.log(Array.of(score1, score2, score3)); //make array of these individual values

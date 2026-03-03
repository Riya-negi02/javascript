const marvel_heros= ["thor", 'ironman', 'spiderman']
const dc= ['superman', 'flash', 'batman']

marvel_heros.push(dc)
//console.log(marvel_heros); //array inside marvel array

const allheros=marvel_heros.concat(dc)
//console.log(allheros); // merged array

//spread 
const all_new_heros = [...marvel_heros, ...dc]
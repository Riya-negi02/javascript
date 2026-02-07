const accountId = 144553  // to declare constant
let accountEmail= 'riya@google.com' 
var accountPassword= '12345'
accountCity= 'jaipur' // can use but not recommended
let accountState; //value will be undefined
/*
prefer not ot use var because of issue in block scope and functional scope
*/
//const keyword can't be changed
accountEmail= 'hc@hc.com'
accountPassword= '2121'
accountCity= 'Bengluru'

console.log(accountId)
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
let a = 300 //global scope
if(true){
    let a= 10    //block scope
    const b=20
}
//scope of let and const will be inside if only if print outside it will not show any value

//nested scope
function one(){
    const username = 'harry'
    function two(){
        const website= 'inst'
        console.log(username);
        
    }
    console.log(website);  //scope is destroyed pahele hi

    two()
    
}
one()
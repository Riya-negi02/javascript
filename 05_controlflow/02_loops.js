//for
for( let index=0; index< Array.length; index++){
    const element= array[index];
    console.log(element);
}

//break and continue
for (let index = 0; index < array.length; index++) {
    // if (index==5){
    //     console.log("detected");
    //     break;      //break the loop after the condition
    // } 
      
    if (index==5){
        console.log("detected");
        continue;      //skip the condition
    } 

    const element = array[index];   
}

//while 
let index= 0
while (index <=10) {
    //code
    index++
}

//do while
do{                        // will run for one time before condition
    //code
}
while (condition);
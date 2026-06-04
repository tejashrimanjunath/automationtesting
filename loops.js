const val = true

//----Understanding Loops and Conditional Statements in JavaScript----//
//If-else statement
console.log("if-else values is")
if(!val){

    console.log("Condition Passes")

}
else{
    console.log(!val)
    console.log("Condition Failed")

}

//While loops
console.log("while loop values are")
let i=0
while(i<10){
    i++
    console.log(i)
}


//do-while loop
i=0
console.log("do-while loop values are")
do{
    i++
    console.log(i)
}while(i<5);


//for loop
console.log("for loop values are")
for(let j=0; j<5; j++){
    console.log(j)
}

//for loops with if conditions in develop branch
let n=0
console.log("for loop with if conditions values are")
for(let k=1;k<100;k++){
if(k%2 ==0 && k%5==0){
    console.log(k)
    n++

    if(n==5)
        break

}
}

let a = [1,2,3,4,5,6,7,8,9]
let a = [1,2,3]
let b = [4,5,6]
let c = a.concat(b)

///Tejashri

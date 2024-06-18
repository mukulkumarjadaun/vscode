let random = Math.random()

let a = prompt (" enter the first number")
let b = prompt ("operation")
let c= prompt ("enter the second number")

let obj = {

    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(random>0.1){
    console.log(`${a} ${b} ${c}`)
   
}
else{
b=obj[b]
console.log(`${a} ${b} ${c}`)
}
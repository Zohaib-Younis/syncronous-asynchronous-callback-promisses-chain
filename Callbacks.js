//Callback is another argument to another function
function sum(a,b){
    console.log(`a+b = ${a+b}`)
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(2,4,sum); 

// we can also pass callback as an arrow funtion 

calculator(23,7,(a,b)=>{
    console.log(`A + B = ${a+b}`);
});

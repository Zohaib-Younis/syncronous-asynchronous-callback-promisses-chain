//sync
// console.log("One");
// console.log("Two");
// console.log("Three");

//Async

// function hello(){
//     console.log("Hello")
// }
// setTimeout(hello,4000);

console.log("One");
console.log("Two");

setTimeout(()=>{ //run paralell means isay side ma rakh do to ya jasay he complete hoga apna output print ker da ga baki ke instructions is ke waja sa distrub na ho
    console.log("Hello, How are You?");
},4000)//milisecond 4 sec=4000 milisecond
console.log("Three");
console.log("Four")


//we can also create an arrow function in out settimeout method

//Callback function syncronous
function sum(a,b){
   console.log(`A + B = ${a+b}`) 
}

function calculator(a,b, sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);

//Callback function Asyncronous
let hello=() =>{
    console.log("hello");
}
setTimeout(hello,3000 ); // we pass hello here which is also a callback




function getDate(dataId,getNextData ){
    setTimeout(() => {
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);

};
//Callback Hell complex way
getDate(1,()=>{
    getDate(2,()=>{
        getDate(3,()=>{
            getDate(4,()=>{
                getDate(5,()=>{
                    getDate(6);
                });
            });
        });
    });
});  

// Promisses to solve callback hell problem
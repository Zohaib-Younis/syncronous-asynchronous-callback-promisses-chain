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


 const getPromise = () => {return new Promise ((resolve,reject)=>{
    console.log("I'm a promise");
    // resolve("Success");
    reject("With some error");
});
 };
 let promise=getPromise();
 promise.then((result) => {
    console.log("Promiss fulfilled",result);
 }).catch((error) => {
    console.log("prmiss Rejected",error);
 });

//Promise chain

function asyncFun(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("Some Data-1")
            resolve("success");
        }, 4000);
    })
};

function asyncFun2(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("Some Data-2")
            resolve("success");
        }, 4000);
    })
};


console.log("Fetching Data-1...")
let p1=asyncFun();
p1.then((result) => {
    console.log(result);
    console.log("Fetching Data-2...");
    let p2= asyncFun2();
    p2.then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
}).catch((err) => {
    console.log(err);
});
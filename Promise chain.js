//Promise Chain For example we have an asyncronous function
function asyncFun(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data-1")
            resolve("Success");
        },4000);
    });
};

function asyncFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data-1")
            resolve("Success");
        },4000);
    });
};

let p1= asyncFun();
console.log("Fetching data-1....");
p1.then((result) => {
    console.log(result);
    console.log("Fetching data-2....");
    let p2=asyncFun2();
    p2.then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
}).catch((err) => {
    console.log(err);
});
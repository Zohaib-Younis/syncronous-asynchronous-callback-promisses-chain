//Promise is an object in javascript which has three states name as
//pending 
//fullfilled
//rejected


//HANDLER      resolve and reject created by javascript automatically
let promise= new Promise((resolve,reject)=>{
    console.log("I'm a Promis");
    // resolve(123);
    reject("Some error accoured");
});

//here we are creating promises but in general programming when we sent request for a result to API then API returns us promise then we deal with promises to fetch data
//we just handel promises

function GetData(dataId,getNextData){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Data with",dataId);
            resolve("SUCCESS FULLY RESOLVE");
            if(getNextData){
               getNextData();// if getdatanext exsist kerta ha tabhi hmaray pass ya execute hoga
            }
           },5000);
    })
 };
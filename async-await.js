//keywords in js
//async ko simple bnatay hn 
//async keywords ko basically hm function ka sath use kertay hn 
 // kisi bhe normal function ko async function bana saktay hn
 // async function always returns a promise 

 async function hello(){
    console.log("Hello");
 };

 // Await jab tak execution ko rokay ga jab tak hmara promis kahi settle ni ho jata
 //we can use awaite funtion only in a async funtion

//  function API(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Weather API");
//             resolve("SUCCESS");
//         }, 2000);
//     });
//  };
//  async function getWeatherData(){
//     await API();// 1st call
//     await API();// 2nd call
//  }


function GetData(dataId,){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Data with",dataId);
            resolve("SUCCESS FULLY RESOLVE");
           },3000);
    })
 };
//This code easier then callback and promise chain
 async function getAllData(){
    console.log("Getting Data-1...");
    await GetData(1);
    console.log("Getting Data-2...");
    await GetData(2);
    console.log("Getting Data-3...");
    await GetData(3);
 };
 console.log(getAllData());

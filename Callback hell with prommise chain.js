//DO THIS WITH PROMIS CHAINING

// GetData(1,()=>{
//     GetData(2,()=>{
//         GetData(3,()=>{
//             GetData(4);
//         });
//     });
//  });

function GetData(dataId,){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Data with",dataId);
            resolve("SUCCESS FULLY RESOLVE");
           },3000);
    })
 };

//  let promise1=GetData(1);
// console.log("Fetching Data-1....")
//  promise1.then((result)=>{
//     console.log(result);
//     console.log("Fetching Data-2....")
//     let promise2=GetData(2);
//     promise2.then((result)=>{
//         console.log(result);
//         console.log("Fetching Data-3....")
//         let p3=GetData(3);
//         p3.then((result)=>{
//             console.log(result);
//         })
//     })
//  })



//  Also ANother Better Way That is actual promise chain

GetData(1).then((result)=>{
    return GetData(2);
}).then((result)=>{
    return GetData(3);
}).then((result)=>{
    console.log(result);
}) 
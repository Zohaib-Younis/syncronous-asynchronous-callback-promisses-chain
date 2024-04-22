// callback hell means like some situation where we face nested callbacks when nesting is going on very deeper level to hmaray pass 
// call back hell ke problem ati ha

function getData(dataId){
   setTimeout(()=>{
    console.log("Data with",dataId)
   },2000);
};  

let data_1  =  getData(()=>{
    console.log("data_1");
})
// pahlay data-1
// phir data-2
// phir data-3

function GetData(dataId,getNextData){

    setTimeout(()=>{
     console.log("Data with",dataId);
     if(getNextData){
        getNextData();// if getdatanext exsist kerta ha tabhi hmaray pass ya execute hoga
     }
    },2000);
 }; 

 //nested calbacks or callback hell mean complex to write a program

 GetData(1,()=>{
    GetData(2,()=>{
        GetData(3,()=>{
            GetData(4);
        });
    });
 });

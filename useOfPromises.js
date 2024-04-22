//Agar hmay ak promis mil gaya to usay hm use kasay kray ga ya hmaray lia bht important ha 
//promis ko use kernay k lia hmaray pass do function hotay hn k jab bhe hmaray pass koi promis ata ha 
//agar full fill ho jai ya reject hop jai 
// agar kisi prmise ka fullfill honay ka kam kerwana ha to hm .then() ka use kray ga
//Agar reject honay k lia kam kerwwana ha to hm .catch() ka use kray ga


const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console. log("I'm a Promise");
        resolve("Success");
    });
}

let promise=getPromise();
promise.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});


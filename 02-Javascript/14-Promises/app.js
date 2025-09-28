// console.log("hello world");


// Promises

// resolve
// reject
// pending



// let age = 121

// const promise1 = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         if(age >= 18){
//             console.log("testing");
            
//             resolve()
//         } else {
//             console.log("testing");
//             reject()
//         }
        
//     }, 1000);
// })

// console.log(promise1);

// promise1
// .then(()=>{
//     console.log("promise resolve hogaya");
    
// })
// .catch(()=>{
//     console.log("promise reject hogaya");

// })



function shaadiScnz (bankBalance) {
    return new Promise((resolve , reject)=> {
        setTimeout(() => {
            if(bankBalance >= 1000000){
                resolve("shaadi mubarak")
            } else {
                reject("ammi chalang marlaingi")
            }
        }, 1500);
    })
}

// shaadiScnz(2500000)
// .then((res)=>{
//     console.log(res);
//     return res + " updated"
// })
// .then((res)=>{
//     console.log("dosra .then" , res);
    

// })
// .catch((err)=>{
//     console.log(err);
    
// }).finally(()=>{
//     console.log("laazmi chalaiga");
    
// })




// try {
//     alert("hello")
// } catch (error) {
//     console.error(error);
    
// }
// console.log("console after alert");




async function resolvePromise(){
    try {
        let result = await shaadiScnz(200000);
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
    
}

resolvePromise()
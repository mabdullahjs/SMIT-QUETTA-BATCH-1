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

// function shaadiScnz (bankBalance) {
//     return new Promise((resolve , reject)=> {
//         setTimeout(() => {
//             if(bankBalance >= 1000000){
//                 resolve("shaadi mubarak")
//             } else {
//                 reject("ammi chalang marlaingi")
//             }
//         }, 1500);
//     })
// }

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

// async function resolvePromise(){
//     try {
//         let result = await shaadiScnz(200000);
//         console.log(result);
//     } catch (error) {
//         console.log(error);

//     }

// }

// resolvePromise()

// fetch
// axios

const div = document.querySelector(".container");

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     return res.json()
// }) .then((res)=>{
//     console.log(res);
//     res.map(item => {
//     div.innerHTML += `
//         <div class="children">
//             <p>Name: ${item.name}</p>
//             <p>Email: ${item.email}</p>
//         </div>
//     `
//     })

// })
// .catch((err)=>{
//     console.log(err);

// })

// axios("https://api.freeapi.app/api/v1/public/randomusers")
//   .then((res) => {
//     const data = res.data.data.data
//     console.log(data);
    
//     data.map(item => {
//             div.innerHTML += `
//         <div class="children">
//         <img src="${item.picture.medium}"/>
//             <p>Name: ${item.name.title} ${item.name.first} ${item.name.last}</p>
//             <p>Email: ${item.email}</p>
//         </div>`
//     })
    
//   })
//   .catch((err) => {
//     console.log(err);
    
//   });



// axios("https://api.freeapi.app/api/v1/public/randomproducts")
// .then(res => {
//     console.log(res.data.data.data);
    
// }).catch(err => {
//     console.log(err);
    
// })


// const getproducts = async () => {
//     try {
//         const data = await axios("https://api.freeapi.app/api/v1/public/randomproducts");
//         const products = data.data.data.data
//         console.log(products[0]);
//         products.map(item => {
//             div.innerHTML += `
//             <div class="product-card">
//             <img src="${item.images[0]}" alt="Product Thumbnail">

//             <div class="product-details">
//                 <div class="product-title">${item.title}</div>
//                 <div class="product-brand">Brand: ${item.brand}</div>
//                 <div class="product-category"> ${item.category}</div>

//                 <div class="product-price">
//                     $ ${item.price}
//                     <span class="product-discount">-${item.discountPercentage}</span>
//                 </div>

//                 <div class="product-rating">⭐ Rating:  ${item.rating}</div>
//                 <div class="product-stock">In stock:  ${item.stock} units</div>

//                 <div class="product-description">
//                      ${item.description}
//                 </div>
//             </div>
//         </div>
//             `
//         })
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

// getproducts()


// const apiKey = "b4db485d7c4c485fa6d84351232508"
// const apiUrl =  "http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=quetta&aqi=no"


// axios(apiUrl)
// .then(res => {
//     console.log(res.data);
    
// }).catch(err => {
//     console.log(err);
    
// })
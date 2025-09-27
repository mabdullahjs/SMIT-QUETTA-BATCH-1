// console.log("hello world");
//onclick
//onchange
//onmouseover
//onmouseout
//onsubmit

// function testing(){
//     console.log("test");

// }

// const head = document.querySelector("#head");

// head.addEventListener("click" , ()=>{
//     console.log("hello from addeventlistner");

// })

// head.addEventListener("click" , testing)

// onchange

// const input = document.querySelector("#myinput");

// input.addEventListener("input", () => {
//   console.log("input event triggered");
// });

// const head = document.querySelector("#head");

// head.addEventListener("mouseover" , ()=>{
//     console.log("mouse over triggered");

// })

// head.addEventListener("mouseout" , ()=>{
//     console.log("mouse out");

// })

// const onBulb = "https://cdn.mos.cms.futurecdn.net/8URLqwFeJihbNpn3gByhg3.jpg"

// const offBulb = "https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg"

// const img = document.querySelector("#img");

// img.addEventListener("mouseover" , ()=>{
//     console.log("mouse over");
//     img.src = onBulb

// })
// img.addEventListener("mouseout" , ()=>{
//     console.log("mouse out");
//     img.src = offBulb

// })

// bubbling

// capturing

// const ul = document.querySelector(".images");
// const imgThree = document.querySelector("#image-3");
// const link = document.querySelector("#link-1");

// ul.addEventListener("click", () => {
//   console.log("ul clicked");
// });

// imgThree.addEventListener("click", (event) => {
//     // console.log(event.target);
//     event.stopPropagation()

//   console.log("li clicked");
// });

// link.addEventListener("click" , (event)=>{
//     event.stopPropagation()
//     event.preventDefault()
//     console.log("testing");

// })

// ul.addEventListener("click" , (event)=>{
//     console.log(event.target.tagName);
//     console.log(event.target.parentNode);

//     if(event.target.tagName === "IMG"){
//         event.target.parentNode.remove()
//         return

//     }

// })

// onsubmit

// const firstName = document.querySelector("#firstname");
// const lastName = document.querySelector("#lastname");
// const form = document.querySelector("#form");

// form.addEventListener("submit" , (event)=>{
//     event.preventDefault()
//     console.log(firstName.value);
//     console.log(lastName.value);

// })

// synchronous
// asynchronous

// console.log("01");
// console.log("02");
// console.log("03");
// setTimeout(() => {
//   console.log("04");
// }, 0);
// console.log("05");



// setimeout
// setinterval
// promises
// async await
// fetch
// axios

setTimeout(() => {
  console.log("04");
}, 0);


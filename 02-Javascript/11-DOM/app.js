// // switch case

// let fruit = "grapedassdasds";
// // apple 1
// // banana 1.5
// // grapes 2
// // mango 3
// // melon 2.2

// if (fruit === "apple") {
//   console.log("apple price $1");
// } else if (fruit === "banana") {
//   console.log("banana price $1.5");
// } else if (fruit === "grapes") {
//   console.log("grapes price $2");
// } else if (fruit === "mango") {
//   console.log("mango price $3");
// } else if (fruit === "melon") {
//   console.log("melon price $2.3");
// } else {
//   console.log("ya fruit available nahi ha");
// }

// switch (fruit) {
//   case "apple":
//     console.log("apple price $1");
//     break;
//   case "banana":
//     console.log("banana price $1.5");
//     break;
//   case "grapes":
//     console.log("grapes price $2");
//     break;
//   case "mango":
//     console.log("mango price $3");
//     break;
//   default:
//     console.log("ya fruit available nahi ha");
// }

// hoisting

// undefined vs null

// var username = null;
// console.log(username);
// var username;

// console.log(username);
// var username = "abdullah";

// let or const hoisting support nah krta
// testing()

// function testing(){
//     console.log("hello world");
// }


// mutable and immutable

// const fruit = ['apple' , 'banana' , 'orange']
// fruit.push("changed")
// console.log(fruit);

// const user = {
//     fullname: "abdullah"
// }
// user.age = 21
// console.log(user);

// let user = "abdullah"
// user[2] = "abc"
// console.log(user);



// DOM



// const h1 = document.querySelector('#head-')
// const h1 = document.querySelectorAll('h1')
// h1[1].innerHTML = "changed"
// console.log(h1);


// const h1 = document.getElementById('head')
// h1.innerHTML = "changed"





// let emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
// let userInput = "mabdullah2037"

// console.log(emailRegex.test(userInput));


// let cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
// let userCnicInput = '54202-54446765-5'
// console.log(cnicRegex.test(userCnicInput));





var fullname =document.querySelector("#fullname");
var email =document.querySelector("#email");
var phone =document.querySelector("#number");

function submit(){
    console.log(fullname.value)
    console.log(email.value)
    console.log(phone.value)
}



// fullname max 10 min 5 required
// email required
// age min 18 max 60
// phone number 0322-1767616

// form banana haa or iski validation krni ha using regex
// agar koi issue haa to sweet alert ko use krka error btana ha
// submit pa succefull ka alert ayega










// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.toString());

// console.log(currentDate.getDate());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());
// console.log(currentDate.getTime());







// kisi banda ki age nikaalni haa

let currentDate = new Date().getTime();
let birthdata = new Date("July 10, 2005 13:25:00").getTime()
let remainingMilliseconds = currentDate - birthdata
let calculateAge = Math.floor(remainingMilliseconds / 1000 / 60 / 60 / 24 / 365)

console.log(calculateAge);



function changePage(){
    localStorage.setItem("calculatedAge" , JSON.stringify(["apple" , "banana" , "orange"]))
    window.location = "about.html"
    // console.log(window.location);
    
    
}






// let currentDate = new Date();
// // currentDate.setFullYear(2005)
// // currentDate.setHours(13)
// console.log(currentDate.getDay());







// if else
// loops
// array
// function
// Set timeout interval


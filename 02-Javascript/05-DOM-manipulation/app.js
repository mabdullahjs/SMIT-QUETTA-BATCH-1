// console.log("hello world");

// var heading = document.querySelector("#heading")
// var paragraph = document.querySelector("#para");

// console.log(heading.innerHTML);

// heading.innerHTML = "Changed through Javascript"

// paragraph.innerHTML = "change this paragraph using javascript"

// var h1 = document.querySelector('#heading');
// var num = 0

// function changetext(){
//     // console.log("text changed");
//     num += 1
//     h1.innerHTML = "changed through javascript " + num
// }

// var h2 = document.querySelector("#heading-two")

// function changedText(){
//     console.log("hello world" , h2.innerHTML);
//     if(h2.innerHTML === "available"){
//         h2.innerHTML = "not available"
//     }else {
//         h2.innerHTML = "available"

//     }

// }

// var h1 = document.querySelector("#heading-one");
// function changeText(){
//     console.log("text changed");
//     console.log(h1.innerHTML);
//     h1.innerHTML = "Changed through Javascript"
//     console.log(h1.innerHTML);

// }

// var counterHeading = document.querySelector("#counter-heading");
// var counter = 0;

// function addCounter() {
//   counter += 1;
//   console.log("counter add", counter);
//   counterHeading.innerHTML = counter;
// }
// function lessCounter() {
//   if (counter < 1) {
//     alert("akhir krna kiya chahta ho");
//   } else {
//     counter -= 1;
//     console.log("counter less");
//     counterHeading.innerHTML = counter;
//   }
// }



// var para = document.querySelector(".message");
// para.innerHTML = "welcome!"


var input = document.querySelector('#nameInput');
var result = document.querySelector("#result");

// console.log("outside func" , input.value);
function getuserVal(){
    console.log("inside func" , input.value);
    result.innerHTML = "hello " + input.value
    
}
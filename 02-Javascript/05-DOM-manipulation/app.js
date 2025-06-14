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


// var input = document.querySelector('#nameInput');
// var result = document.querySelector("#result");

// // console.log("outside func" , input.value);
// function getuserVal(){
//     console.log("inside func" , input.value);
//     result.innerHTML = "hello " + input.value
    
// }


// var num1 = document.querySelector("#num1")
// var num2 = document.querySelector("#num2")
// var result = document.querySelector("#result")

// function total(){
//     var sum = +num1.value + +num2.value
//     result.innerHTML = "the sum of " + num1.value + " and " + num2.value + " is " + sum;
//     result.style.color = "white"
//     result.style.backgroundColor = "black"

// }



var body = document.querySelector("body");

// body.style.backgroundColor = "red"

function changeColor(color){
    console.log(color);
    body.style.backgroundColor = color
    
}

var image = document.querySelector("#image");

function imageChange(){
    image.src = "https://images.unsplash.com/photo-1746748694015-036d4dd23c13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}

var para = document.querySelector("#para");
var btn = document.querySelector("#btn");

function togglePara(){
    // console.log(btn.innerHTML);
    
    console.log(para.innerHTML);
    if(para.style.visibility == "hidden"){
        para.style.visibility = "visible"
        btn.innerHTML = "toggle off"
    }else {
        para.style.visibility = "hidden"
        btn.innerHTML = "toggle on"
    }
    
}


// innerhtml ka through element ka content change krna
// input form ki value get krna using .value
// styling dena js ka thorugh using .style.cssproperty
// image ko change krskta using .src
// function greetuser() {
//   console.log("hello world 1");
//   console.log("hello world 2");
//   console.log("hello world 3");
//   console.log("hello world 4");
//   console.log("hello world 5");
// }

// greetuser()
// greetuser()







// parameter | argument
// function greetUser(username){
//     console.log("hello " + username);
// }

// greetUser("abdullah")
// greetUser("Usman")






// return bilkul end ma ata ha
// return ka baad kuch nahi likhna
// return sirf aik dafa hoskta

// function sum(num1 , num2){
//     console.log(num1 + num2);
//     return "num1 + num2"    
// }

// sum(20 , 30)
// sum(80 , 20)



// return 


// var username = prompt("enter your username");

// console.log(username);


// var total = sum(20 , 30);
// console.log(total);










// function checkCity(city){
//     return "hello from " + city
// }

// var greetuser = checkCity()
// console.log(greetuser);





// local variable
// global variable


// var username = "abdullah"
// var age = 21

// function greetUser(fullname){
//     var lastName = "khan" // local varibale
//     console.log("hello " + fullname + " " + lastName);
//     console.log(age);
    
// }


// greetUser(username)












// var age = 21;

// function greetUser(username){
//     var localVar = "test"
//     console.log("hello " + username);
//     return "hello return " + username + " " + age + " " + localVar;
// }


// greetUser("abdullah")
// greetUser("usman")
// greetUser('ammar')
// greetUser("affan")
// greetUser()

// var fullname = "usman"
// var myfunc = greetUser(fullname);
// console.log(myfunc);


// var username = prompt("enter your name");

// console.log(username);





// method
// function

// var heading = document.querySelector("#heading-one")

// // hello world | changed through javascript
// function greetUser(){
//     console.log(heading.innerHTML);
//     if(heading.innerHTML === "hello world"){
//         heading.innerHTML = "changed"
//         heading.style.backgroundColor = "red"
//         heading.style.color = "white"
//     } else {
//         heading.innerHTML = "hello world"
//         heading.style.backgroundColor = "white"
//         heading.style.color = "black"
//     }
    
    
// }











// var fullnameInput = document.querySelector("#fullname");
// var passwordInput = document.querySelector("#password")
// var fullnameResult = document.querySelector("#result-fullname")
// var passwordresult = document.querySelector("#result-password")


// function getVal(){
//     console.log(fullnameInput.value);
//     console.log(passwordInput.value);

//     fullnameResult.innerHTML = fullnameInput.value
//     passwordresult.innerHTML = passwordInput.value
    
    
// }






// function checkTemperature(temperature){
//     if(temperature > 30){
//         return "Hot"
//     } else if(temperature < 10){
//         return "Cold"
//     } else {
//         return "Normal"
//     }    
// }


// console.log(checkTemperature());
















// 4 form field banaingi. 4 subjects ka number user daiga. total marks 400. button ka click paa uska obtained marks, percentage and grade.
























var fullname = document.querySelector("#fullname");
var rollNumber = document.querySelector("#rollNumber");
var subjectOne = document.querySelector("#subjectOne");
var subjectTwo = document.querySelector("#subjectTwo");
var subjectThree = document.querySelector("#subjectThree");
var subjectFour = document.querySelector("#subjectFour");
var result = document.querySelector("#result");


function generateresult(){
    var totalMarks = 400;
    var obtainedMarks = +subjectFour.value + +subjectThree.value + +subjectTwo.value + +subjectOne.value
    var percentage = obtainedMarks / totalMarks * 100;

    var finalMessage = fullname.value + " with roll number (" + rollNumber.value + ") has obtained " + obtainedMarks + " marks out of " + totalMarks + " and percentage is " + percentage + "%"
    
    result.innerHTML = finalMessage
    
    
}









// function multiple() {
//   console.log("hello world 1");
//   console.log("hello world 2");
//   console.log("hello world 3");
//   console.log("hello world 4");
// }

// multiple()
// multiple()

// function greetUser (){
//     console.log("hello abdullah");
// }

// greetUser()
// greetUser()
// greetUser()
// greetUser()

// function greetUser (username , email , age){ // parameter receive krna
//     console.log("hello " + username + " with email " + email + " and age is " + age);
// }

// greetUser("abdullah" , "mabdullah@gmail.com" , 21) // argument send krna
// // greetUser("usman")

// greetUser("usman" , "usman@gmail.com" , 18)

// function sum(num1 , num2){
//     console.log(num1 + num2);

// }

// sum(12 , 70)
// sum(10 , 10)

// var nums = 20

// function square (num){
//     console.log(num ** 2);
// }

// square(nums)

// function greetUser(username){
//     console.log("hello " + username);
// }

// greetUser()

// var username = prompt("username")
// console.log(username);

// var age = 21
// var typeCheck = alert(age)

// console.log(typeCheck);

// return

// function sum(num1 , num2){
//     console.log(num1 + num2);
//     return num1 + num2
// }

// var total = sum(20 , 30)
// console.log(total);

// console.log(sum(20 , 30));

// function calculatePercentage(username, num1, num2, num3, num4) {
//   var totalMarks = 400;
//   var obtainedMarks = num1 + num2 + num3 + num4;

//   var percentage = (obtainedMarks / totalMarks) * 100;
  
//   return "candidate name is " + username + " and his percentage is " + percentage + "%."  
// }

// console.log(calculatePercentage("abdullah", 80, 80, 40, 30));











// local variable
// global variable'

var username = "abdullah" // global variable
function greetUser(){
  var lastName = "khan" // local variable
  console.log("hello " + username + lastName);
}

console.log(lastName);

greetUser()







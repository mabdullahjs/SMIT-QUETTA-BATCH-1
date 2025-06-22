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

// var username = "abdullah" // global variable
// function greetUser(){
//   var lastName = "khan" // local variable
//   console.log("hello " + username + lastName);
// }

// console.log(lastName);

// greetUser()

// ES6

// var
// let
// const

// var city = "karachi";
// var city = "quetta"; // redeclare
// city = "Lahore" //reassign

// let username = "abdullah"
// // let username = "Usman" // redeclare x
// username = "Usman"
// console.log(username);

// let username;
// username = "abdullah"

// const username = "Abdullah"
// redeclare reassign x


// | Value        | Description                |
// | ------------ | -------------------------- |
// | `false`      | The Boolean `false` itself |
// | `0`          | The number zero            |
// | `-0`         | Negative zero              |
// | `""` or `''` | Empty string               |
// | `null`       | Null value                 |
// | `undefined`  | Undefined value            |
// | `NaN`        | Not-a-Number               |



// 5 + 4 + 3 + 2 + 1

// recurrsion

function recursion(num) {
  if (num === 0) {
    return 0;
  }
  return num + recursion(num - 1);
}

// recursion(5)
// → 5 + recursion(4)
// → 5 + (4 + recursion(3))
// → 5 + (4 + (3 + recursion(2)))
// → 5 + (4 + (3 + (2 + recursion(1))))
// → 5 + (4 + (3 + (2 + (1 + recursion(0)))))
// → 5 + (4 + (3 + (2 + (1 + 0))))
// → 5 + 4 + 3 + 2 + 1 + 0
// → 15

console.log(recursion(5));
console.log(5 + 4 + 3 + 2 + 1);



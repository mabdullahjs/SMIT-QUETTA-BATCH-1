// Variable Scoping //c
// Closure //c
// lexical scoping //c
// IIFE //c
// Object Methods (keys,values,freez,entries) //c
// Exponentiation Operator //c
// Optional chaining //c
// Destructuring //c
// Template literals //c
// Destructuring //c
// Default parameters //c
// Rest parameter //c
// Spread Operator //c
// Arrow functions //c
// Enhanced object literals //c
// Iterators & For..of //c
// Map //c
// Array methods //c
// Higher-order function //c
// CallBack //c
// Promises //c
// Ternary Operator
// modules

// console.log("hello world");

// function scope
// block scope

// function scopeTest() {
//   if (true) {
//     var x = 1;        // function scoped
//     let y = 2;        // block scoped
//     const z = 3;      // block scoped
//   }

//   console.log(x); // 1 (accessible)
//   console.log(y); // Error: y is not defined
//   console.log(z); // Error: z is not defined
// }
// scopeTest();

// closure and lexical scoping

// function outerFunc(){
//     console.log("outer function called");

//     function innerfunc(){
//         console.log("inner function called");
//     }

//     return innerfunc
// }

// outerFunc()()
// let inFunc = outerFunc()
// inFunc()

// function outerFunc(){
//     let outerVar = "outer"

//     function childrenOne(){
//         let childOne = "child one"
//         console.log(outerVar);
//         // console.log(childTwo);

//     }

//     function childrenTwo() {
//         let childTwo = "child Two"
//         console.log(outerVar);
//         // console.log(childOne);
//     }

//     childrenOne()
//     childrenTwo()
// }

// outerFunc()

// IIFE Immediately Invoked Function Expression

// (function testing(username){
//     console.log("hello world" , username);

// })("abd")

// Object Methods (keys,values,freez,entries)

// const user = {
//   name: "Alice",
//   age: 25,
//   email: "alice@example.com",
//   isAdmin: false,
//   greet: function() {
//     console.log("Hello, " + this.name + "!");
//   }
// };

// console.log(user.greet());
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// Object.freeze(user)
// user.name = "Abdullah"
// console.log(user);

// Exponentiation Operator (power)

// console.log(2 ** 5);
// console.log(2 * 2 * 2 * 2 * 2);

// optional chaining

// const user = {
//   name: "John",
//   address: {
//     city: "New York"
//   }
// };

// console.log(user.address?.street?.name);

// Destructuring (object , array)
// const user = {
//   name: "Alice",
//   age: 25,
//   email: "alice@example.com",
//   isAdmin: false
// };

// let {name , age:edad , email , isAdmin} = user

// console.log(edad);

// let fruit = ['apple' , 'banana' , 'orange' , 'watermelon']

// // console.log(fruit);
// let [firstFruit , , third , fourth] = fruit

// console.log(fourth);

// let username = "mabdullah"
// let fullname = "Muhammad Abdullah Khan"

// // Muhammad Abdullah Khan username is mabdullah
// // console.log(fullname + " username is " + username);
// console.log(`${fullname} username is ${username}`);

// Default parameters
// Rest parameter
// Spread Operator

// function testing(username = "Testing") {
//     console.log(`hello ${username}`);

// }

// testing("Abd")

// rest parameter

// function testing(...names){
//     console.log(names);

// }

// testing("abdullah" , "usman" , {fullname: "abdullah"} , ["Ammar"] , true)

// spread operator

// const numbers = [10, 20, 30, 40, 50];
// const fruits = ["apple", "banana", "orange"];
// const mixed = [1, "hello", true, null];

// let newArr = [...numbers , ...fruits , ...mixed]
// console.log(newArr);

// const testing = (username) => (`hello world ${username}`)
// console.log(testing("abdullah"));


//  Enhanced object literals

// let username = "abdullah";
// let age = 20;

// let user = {
//     username,
//     age
// }

// console.log(user);


// for (const element of fruits) {
//     console.log(element);
    
// }

// for (const key in user) {
//     console.log(`${key} : ${user[key]}`);  
// }


// Ternary Operator
// ifelse ka chota version

// let age = 21;
// if(age > 20){
//     console.log("gym ma admission");
    
// } else {
//     console.log("doodh piyo");
    
// }

// age > 20 ?  console.log("gym ma admission") : console.log("doodh piyo")

// const score = 75;

// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score >= 80) {
//   console.log("Grade: B");
// } else if (score >= 70) {
//   console.log("Grade: C");
// } else if (score >= 60) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: F");
// }


// score >= 90 ? console.log("Grade: A") : score >= 80 ? console.log("Grade: B") : score >= 70 ? console.log("Grade: C") : score >= 60 ? console.log("Grade: D") : console.log("Grade: F")




// modules
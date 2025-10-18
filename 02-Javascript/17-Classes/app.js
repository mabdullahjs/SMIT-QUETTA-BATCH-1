// console.log("hello world");

// objects

// object oriented programming (OOPS)
// functional programming

// let arr = []
// console.log(arr);

// syntactic sugar

// instances // object

// user = {name , email , age}
// abd = {abdullah , ebd@gam , 21}
// salam = {salam ,}

// how many ways to create object in js

// object literal

// const user1 = {
//     name: "abdullah",
//     email: "mabdullah203@gmail.com"
// }
// const user2 = {
//     name: "abdullah",
//     email: "mabdullah203@gmail.com"
// }
// const user3 = {
//     name: "abdullah",
//     email: "mabdullah203@gmail.com"
// }

// es6 sa pehla wala constructor function

// blue print
// function Car(brand , model , year){
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }

// const cultus = new Car("Suzuki" , "Cultus" , "2022")
// console.log(cultus);

// Car.prototype.showcase = function (){
//     return `car name is ${this.brand} ${this.model} year ${this.year}`
// }

// // // instances

// const corolla = new Car("toyota" , "Corola" , "2025");
// // console.log(corolla);
// const cultus = new Car("Suzuki" , "Cultus" , "2022")
// // console.log(cultus);

// console.log(corolla.showcase());

// Array.prototype.myFunc = function () {
//   return `my personal function ${this.length}`;
// };

// const arr = [1, 2, 3, 4];
// console.log(arr.myFunc());

// ES6 Classes

// blueprint
// class Car {
//     constructor(brand , model , year){
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     showcase = function (){
//         return `car name is ${this.brand} ${this.model} year ${this.year}`
//     }

// }

// // instance
// const fortuner = new Car("Toyota" , "Fortuner" , "2021")
// console.log(fortuner.showcase());

// method 1 object literals
// method 2 constructor function
// method 3 classes ES6

// const car = {
//     brand: "toyota",
//     model: "fortuner",
//     year: 2021
// }

// function Car(brand , model , year){
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }

// const fortuner = new Car("Toyota" , "Fortuner" , "2021");
// console.log(fortuner);

// class Car {
//   constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//   }


//   testing = function(){
//     return `my personal method or har cheez access hogi ${this.brand}`
//   }
// }


// const fortuner = new Car("Toyota" , "Fortuner" , "2021");
// console.log(fortuner.testing());


// Pillars of oops


//Encapsulation, Inheritance and Polymorphism, and Abstraction

// Encapsulation restrict direct access to data object
// Inheritance get properties of other classes
// Polymorphism something that have more than one form
// Abstraction hiding internal details and describing things in simple terms



// Encapsulation

// class BankAccount {
//     #balance = 0

//     deposit = function (amount){
//         this.#balance += amount;
//         return `your amount ${amount} is deposited successfully`
//     }
// }


// const abdullahAccount = new BankAccount();
// console.log(abdullahAccount.deposit(2000));
// console.log(abdullahAccount.balance);


// Inheritance

// class Vehicle {
//     constructor(brand , model , year){
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }


//     speed = function (){
//         return `car speed is slow ${this.brand}` 
//     }
// }


// class Car extends Vehicle {
//     inherit = function (){
//         return `car will inherit properties from vehicle ${this.brand} ${this.model} ${this.year}`
//     }
// }


// const alto = new Car("suzuki" , "alto" , "2025");
// console.log(alto.speed());



// Polymorphism


// class Bird {
//   fly(){
//     return `I will fly`
//   }
// }

// class Penguins extends Bird {
//   fly(){
//     return `I will not fly`
//   }


// }

// const myPenguins = new Bird()
// console.log(myPenguins.fly());


// Abstraction

// class CoffeeMachine {
//   start() {
//     // starting machine get coffee beans and much more
//     return `your coffee is ready`
//   }

//   brewCoffee() {
//     // complex calculation for getting coffee
//     return `here is your coffee`
//   }
// }


// const myCoffee = new CoffeeMachine()
// console.log(myCoffee.start());
// console.log(myCoffee.brewCoffee());
// console.log("hello world");
// TS Compiler
// Type Annotations
// Type Inference
// Type Aliases
// Union Types
// Interfaces
// Type Aliases vs Interface
// Generics
// Enums
// Tuples
// Type Guards
// type casting
//-----Type Annotations-----//
// let username:string = "abdullah";
// console.log(username);
// let age:number = 22;
// console.log(age);
// age = "abdullah"
// let isLoggedIn:boolean = true;
// // isLoggedIn = []
// console.log(isLoggedIn);
// let users:string[] = ['abdullah' , 'usman']
// function sum(num1:number , num2:number):number{
//     return num1 + num2
// }
// console.log(sum(20 , 30));
// username = true
//-----Type Inference-----//
// let username = "abdullah"
// username = 22
// let cities = ['karachi' , 'quetta' , 'lahore' , 'sialkot']
// cities.push(22)
//-----Type Aliases-----//
// type name = string
// let username:name = "abdullah"
// type User = {
//     fullname: string
//     age: number
//     isLoggedIn: boolean
//     greetUser: () => string
//     lastname?: string
// }
// const user: User = {
//     fullname: "abdullah",
//     age: 22,
//     isLoggedIn: true,
//     greetUser: function () {
//         return `hello ${this.fullname}`
//     }
// }
// user.lastname = "abdullah"
// console.log(user);
// type Fruit = (string | number)[]
// const fruits:Fruit = ['apple' , 22 , true] 
//-----Union Type-----//
// type User = string | number | boolean
// const user:User = []
// type Fruits = (string | number | boolean)[]
// const fruits:Fruits  = ["SAda" , 21  ,true ,{}]
//-----Interfaces-----//
// interface User  {
//     fullname: string
//     age: number
//     isLoggedIn: boolean
//     greetUser: () => string
//     lastname?: string
// }
// const user: User = {
//     fullname: "abdullah",
//     age: 22,
//     isLoggedIn: true,
//     greetUser: function () {
//         return `hello ${this.fullname}`
//     }
// }
// user.lastname = "khan"
// console.log(user);
//-----Interfaces vs Type Aliases-----//
// type User = {
//     username: string;
//     age: number;
// }
// type User = {     //wrong syntax
//     lastname: string
// }
// interface User {
//     username: string;
//     age: number;
// }
// interface User {
//     lastname: string
// }
// const user: User = {
//     username: 'mabdullah',
//     age: 22,
//     lastname: 'khan'
// }
// interface Fruit {
//   fruitName: string;
//   price: number;
//   state: string;
// }
// interface Mango extends Fruit {
//     type: string
// }
// const mango:Mango = {
//     fruitName: 'Mango',
//     price: 500,
//     state: 'larkana',
//     type: 'sindhri'
// }
//-----Enums-----//
// 'Admin' 'Student' student Student STUDENT ADMIN
// enum CardinalDirections {
//   North,
//   East,
//   South,
//   West,
// }
// let currentDirection = CardinalDirections.East;
// console.log(currentDirection);
// enum User  {
//     admin= 'Admin',
//     student= 'Student'
// }
// console.log(User.admin);
// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400,
// }
// StatusCodes.NotFound;
//-----Generics-----//
// function greetUser<T>(username:T):T{
//     return 20
// }
// console.log(greetUser("Ashdiola"));
// function greetUser(username:any):any{
//     return 20
// }
// console.log(greetUser("Ashdiola"));
// let user:any = {
//     username: 'abdullah'
// }
//-----Tuple-----//
// let ourTuple: [number, boolean, string];
// ourTuple = [12, true, "sn"];
// type fruit = [string, number];
// let fruits: fruit = ["mango", 200];
// Type Guards
// function hello(str: string | number) {
//   if(typeof(str) === "string"){
//     return str.toLowerCase()
//   }
//   return `Number ${str}`
// }
// console.log(hello("BFSDJFBHDFB"));
// ;
// console.log(hello(324324));
// ;
var input = document.getElementById("email");
input.value = "test@gmail.com";

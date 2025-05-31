// console.log("hello world");

// // true && false || true && false && 0

// console.log(true && 0);

// | Value        | Description     |
// | ------------ | --------------- |
// | `false`      | Boolean false   |
// | `0`          | Number zero     |
// | `-0`         | Negative zero   |
// | `0n`         | BigInt zero     |
// | `""` or `''` | Empty string    |
// | `null`       | Null value      |
// | `undefined`  | Undefined value |
// | `NaN`        | Not-a-Number    |

// var username = null;
// console.log(username);

// var age = 'abdullah';
// console.log(typeof +age);
// console.log(typeof(age));

// var age = 19;

// // if else elseif
// // {} block , scope

// if (age >= 18){
//     console.log("welcome to my website");

// } else {
//     console.log("website ma dakhla mamnoo haa.");

// }

// var age = +prompt("enter your age");

// 18 ya 18+ admission miljayega
// 15 ya 15 sa 17 tk haa 1000 extra leka admission donga
// 15 < unko admission nahi milaiga

// if (age >= 18) {
//   console.log("welcome to my gym");
// } else if (age >= 15) {
//   console.log("1000 rs extra do or ajao");
// } else {
//   console.log("admission nahi milaiga");
// }



// Check if a number is greater than 10 and less than 20.

// var num = 12;
// if(num >= 10 && num <= 20){
//     console.log("number is greater than 10 and less than 20");
// } else {
//     console.log("obhai kiya kr rha ha?");
    
// }

// Check if a user is either an "admin" or a "moderator".

// var user = "admin";

// if(user === "admin"){
//     console.log("user admin haa");
// }else {
//     console.log("user moderator ha");
    
// }

// Check if a number is not zero and is an even number.

// var num = 28
// if(num != 0 && num % 2 === 0 ){
//     console.log("number is not zero and is an even number")
// }else {
//     console.log("number is not even");
// }


// Check if either a username or an email is provided during login.

// var userGiven = true

// if(userGiven){
//     console.log("given");
    
// }else {
//     console.log("not given");
    
// }

// Check if a person qualifies for a loan (income > 30000 or has collateral).

// var collateral = false;
// var income = 250000;

// if(income >= 30000 || collateral){
//     console.log("lelo udhaar");
// }else{
//     console.log("udhaar band haa, maang ka sharminda na krain");   
// }

// Check if a student passed all subjects (math, English, science ≥ 50).

// var math = 60;
// var eng = 70;
// var sci = 80;

// if(math >= 50 && eng >= 50 && sci >= 50){
//     console.log("pass hoo");
// }else{
//     console.log("rickshaw chaalao");
    
// }



// Check if a character is a vowel (a, e, i, o, u) using ||.

// var char = 'r';

// if(char == 'a' || char == 'e' ||char == 'i' ||char == 'o' ||char == 'u'){
//     console.log("vowel haa");
// }else{
//     console.log("vowel nahi haa");
// }



// Given a person's age and membership status:

// If age ≥ 60 and is a premium member → "Senior Premium Discount"

// Else if age ≥ 60 → "Senior Discount"

// Else if premium member → "Premium Discount"

// Else → "No Discount"

// var memStatus = true;
// var user = 70

// if(user >= 60 && memStatus){
//     console.log("Senior Premium Discount");
// } else if(user >= 60){
//     console.log("Senior Discount");
// } else if(memStatus){
//     console.log("Premium Discount");
// }else {
//     console.log("chalo shaba katto");
    
// }


// Check a person’s eligibility to enter a contest:

// Age must be between 18 and 35

// Country must be "Pakistan" or "India"

// Must not be banned (isBanned === false)

// Use if, else if, and else to show:

// "Eligible"

// "Not eligible due to age"

// "Not eligible due to region"

// "Banned from contest"



var age = 19;
var country = 'India';
var isBanned = false;


if(age >= 18 && age <= 35 && (country === 'Pakistan' || country === "India") && isBanned === false){
    console.log("eligible haa");
    
} else if(!(age >= 18 && age <= 35)){
    console.log("Not eligible due to age");
}  else if(isBanned){
    console.log("Banned from contest");
} else {
    console.log("Not eligible due to region");
}
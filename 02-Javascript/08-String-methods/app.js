// string methods

// tolowercase
// touppercase
// slice
// split
// join
// replace
// replace all


// let username = "Muhammad Abdullah Khan"
// // console.log(username[9]);

// console.log(username.toUpperCase());
// console.log(username.toLowerCase());


// let cities = ['karachi' , 'hyderabad' , 'peshawar' , 'quetta' , 'lahore' , 'islamabad']

// const input = document.querySelector("#input")
// const result = document.querySelector("#result")

// function checkCity(){
//     // console.log(input.value);

//     // if(cities.includes(input.value.toLowerCase())){
//     //     console.log("behtreen zindagi jee rha ho");
        
//     //     return
//     // }
    



//     // if(cities.indexOf(input.value.toLowerCase()) !== -1){
//     //     console.log("behtreen zindagi jee rha ho");
//     //     return 
//     // }



//     // for(let i = 0; i < cities.length; i++){
//     //     console.log(cities[i]);

//     //     if(cities[i] === input.value.toLowerCase()){
//     //         console.log("behtreen city ma rehta ho");
            
//     //         break
//     //     }
        
//     // }


//     // console.log("jhand zindagi ha tumhari pakistan ajao.");




    
// }










// let username = "Muhammad Abdullah Khan"

// console.log(username.slice(2));







// let username = "Muhammad Abdullah khan"

// console.log(username.split("").reverse().join(""));



// function checkPalindrome(str){
//     let reverseStr = str.split("").reverse().join("")

//     if(reverseStr === str){
//         return "palindrome haa"
//     }
//     return "palindrome nahi ha"
// }


// console.log(checkPalindrome("civicss"));








let mess = "Babar is the best batsman in the world. Babar breaks every record. Babar performance in world cups and ICC tournament is Bamboo. Virat appreciate Babar performance."

console.log(mess.replace("Babar" , "Ibrahim"));
console.log(mess.replaceAll("Babar" , "Ibrahim"));

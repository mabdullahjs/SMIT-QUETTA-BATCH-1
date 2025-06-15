// console.log("hello world");

// var fruit = ["apple" , "banana" , "grapes" , "watermelon" , "melon"]
// console.log(fruit);
// console.log(fruit[2]);

// length 1
// index 0

//push
//pop
//unshift
//shift
//splice
//slice
//split
//join
//concat
//sort
//reverse
//indexof
//includes
// nested array

// method / function

// console.log();
// alert()

// var fruit = ["apple", "banana", "grapes", "watermelon", "melon", "mango", "orange", "kiwi", "pineapple", "strawberry", "papaya", "cherry", "blueberry", "guava"];

// console.log(fruit);
// console.log(fruit.includes("kiwi"));

// if(fruit.includes("kiwi")){
    
// }

// console.log(fruit.indexOf("kiwis"));

// if(fruit.indexOf("kiwi") != -1)





// console.log(fruit.sort());

// console.log(fruit.join(" "));

// fruit.push("mango")
// fruit.pop()
// fruit.unshift("strawberry")
// fruit.shift()
// fruit.splice(9 , 2 , "updated")
// fruit.splice(12 , 1)
// fruit.splice(9 , 0 , "updated")

// fruit.splice(startingindex , delete item , add item)
// fruit.splice(2 , 2 , "mango" , "peach" , "kiwi")

// var newArr = fruit.slice(1 , 5)
// console.log(newArr);

// console.log(fruit);

// split string ko array ma convert krta ha

// var username = "Muhammad Abdullah khan"
// console.log(username.split(" "));

// reverse string

// var city = "karachi"
// console.log(city.split("").reverse().join(""));

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];


// var newArr = arr2.concat(arr1)
// console.log(newArr);





// var nestedArr = ["abdullah" , "usman" , ["ammar" , ["affan" , ["uzair"]]]]
// nestedArr[2][1][1].splice(0 , 1, "changed")
// console.log(nestedArr);





// palindrome

// input bananaa "civic" "radar" 
// button pa click kraiga
// neecha print hojayge k ya palindrome haa ya nahi haa.


var input = document.querySelector("#input");
var result = document.querySelector("#result");

function checkPalindrome(){
    console.log("user input ==>" , input.value);
    var reverseStr = input.value.split("").reverse().join("")
    console.log("reverse input ==>" , reverseStr);
    if(reverseStr === input.value){
        console.log("palindrome haa");
        result.innerHTML = input.value + " is palindrome"
        
    }else{
        console.log("nah haa");
        result.innerHTML = input.value + " is not palindrome"
        
    }
    
    
}
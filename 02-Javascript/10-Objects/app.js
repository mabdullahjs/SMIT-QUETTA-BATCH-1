// console.log("hello world");


// console.log(["fruit"]);

// collection of keys and values

// const userInfo = {
//     fullname : "Muhammad Abdullah Khan",
//     email: "mabdullah@gmail.com",
//     age: 21,
//     isLoggedIn: true,
//     hobbies: ['swimming' , 'eating'],
//     greetUser: function (){
//         console.log("function inside object" , this.fullname);

//     }
// }

// // console.log(userInfo.email);
// // console.log(userInfo["fullname"]);
// // console.log(userInfo["hobbies"][1]);


// userInfo.greetUser()




// console.log(this);



// const testing = {
//     fullname: "Abdullah",
//     greetUser: function (){
//         console.log(this);

//     }
// }

// testing.greetUser()










// const user = {
//     fullname: "Abdullah",
//     age: 21,
//     isLoggedIn: true,
//     hobbies: ['swimming' , 'eating'],
//     greetUser: function (){
//         return `hello ${this.fullname}`
//     }

// }


// // console.log(user);
// user.fullname = "usman"
// user.email = "mabdullah@gmail.com"
// delete user.age
// user.hobbies.push("testing")
// user.hobbies[1] = "sleeping"
// console.log(user);

// console.log(user.greetUser());





// class
// constructor
// object literal




// let user = {
//     name: "Alice",
//     address: {
//         street: "123 Main St",
//         city: "New York"
//     }
// };

// console.log(user.address.street);



//obj banana haa name,email,age,greetuser uska baad firstname and lastname baad ma add krna haa or name delete krna ha. greet user ka function jab bhi call hoo to wo return kraa hello '${fullname}'


// const obj = {
//     name: "Muhammad Abdullah",
//     email: "mabdullah@gmail.com",
//     age: 21,
//     greetUser: function (){
//         return `hello ${this.firstname}`
//     }
// }

// obj.firstname = "Muhammad Abdullah"
// obj.lastname = "Khan"
// delete obj.name

// console.log(obj.greetUser());




// 4 formfields banaingi name , email , age, city jaisa hi user submit pa click kraiga mera pass console ma aik object ajayega jiska undar values form wali hongi

// const fullname = document.querySelector("#fullname")
// const email = document.querySelector("#email")
// const age = document.querySelector("#age")
// const city = document.querySelector("#city")

// function info(){
//     const obj = {
//         fullname: fullname.value,
//         email: email.value,
//         age: age.value,
//         city: city.value
//     }
    
//     console.log(obj);
    
// }





let nestedData = [
    {
        category: "Electronics",
        subcategories: [
            {
                name: "Smartphones",
                products: [
                    { brand: "Apple", model: "iPhone 13", price: 999 },
                    { brand: "Samsung", model: "Galaxy S21", price: 799 },
                    { brand: "Google", model: "Pixel 6", price: 699 }
                ]
            },
            {
                name: "Laptops",
                products: [
                    { brand: "Apple", model: "MacBook Pro", price: 1499 },
                    { brand: "Dell", model: "XPS 13", price: 1299 },
                    { brand: "HP", model: "Spectre x360", price: 1199 }
                ]
            }
        ]
    },
    {
        category: "Clothing",
        subcategories: [
            {
                name: "Men's",
                products: [
                    { brand: "Nike", item: "T-shirt", price: 25 },
                    { brand: "Adidas", item: "Joggers", price: 40 }
                ]
            },
            {
                name: "Women's",
                products: [
                    { brand: "Zara", item: "Dress", price: 50 },
                    { brand: "H&M", item: "Jeans", price: 30 }
                ]
            }
        ]
    }
];


console.log(nestedData[0].subcategories[1].products[2].model);







// [{} , {} , {}]



// const users = [
//     {
//         name: "Alice",
//         age: 25,
//         hobbies: ["Reading", "Painting"]
//     },
//     {
//         name: "Bob",
//         age: 30,
//         hobbies: ["Playing guitar", "Cooking"]
//     },
//     {
//         name: "Charlie",
//         age: 22,
//         hobbies: ["Hiking", "Photography"]
//     },
//     {
//         name: "David",
//         age: 28,
//         hobbies: ["Running", "Watching movies"]
//     },
//     {
//         name: "Ella",
//         age: 35,
//         hobbies: ["Traveling", "Knitting"]
//     },
//     {
//         name: "Frank",
//         age: 20,
//         hobbies: ["Gaming", "Drawing"]
//     },
//     {
//         name: "Grace",
//         age: 27,
//         hobbies: ["Singing", "Dancing"]
//     },
//     {
//         name: "Hannah",
//         age: 32,
//         hobbies: ["Cooking", "Yoga"]
//     },
//     {
//         name: "Ian",
//         age: 24,
//         hobbies: ["Playing football", "Reading" ,'a' , 'b' , 'c']
//     },
//     {
//         name: "Jessica",
//         age: 29,
//         hobbies: ["Writing", "Cycling", 'swimming']
//     }
// ];

// const div = document.querySelector(".parent")

// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
//     div.innerHTML += `<div class="children">
//     <p>Username: ${users[i].name}</p>
//     <p>Age: ${users[i].age}</p>
//     </div>`
    
// }







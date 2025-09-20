// arrow function

// function greetUser(username){
//     return `hello ${username}`
// }

// console.log(greetUser("abdullah"));

// const greetings = (username) => {
//     console.log(`hello ${username}` );
//     return `hello ${username}`

// }

// console.log(greetings("abdullah"));

// normal function hoisting support krta ha
// arrow function hoisting support nhi krta ha

// const greetUser = username => `hello ${username}`

// console.log(greetUser("Abdullah"));

// const person = {
//   name: "Alice",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// person.greet();

// for of
// for in

const user = {
  username: "abdullah",
  email: "mabdullah2037@gmail.com",
  age: 21,
  hobbies: ["cricket", "swimming", "eating"],
};

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);

// }

// for (const iterator of arr) {
//     console.log(item);
// }

// for (const key in user) {
//     console.log(`${key} : ${user[key]}`);
// }

// callback function
// wo function jo kisi bhi function ka undar as an argument ata ha
// higher order function
// wo function jiska undar as an argument callback ata ha
// for each

// const fruits = ["apple", "banaana", "orange", "watermelon", "guava", "mango"];
// const iterarr = fruits.forEach((item , index , carr)=>{
//     // console.log(item , index , carr);
//     return item

// })
// console.log(iterarr);



// // map
// const mapArr = fruits.map((item, index) => {
// //   console.log(item, index);
// return item + index
// });
// console.log(mapArr);


const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch"
    }
];



// const filteredProduct = products.filter(item => item.category === "Electronics")
// console.log(filteredProduct);


// filter

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filterArr = num.filter(item => {
//     return item % 2 === 0
// }) 

// console.log(filterArr);


// const names = ["Tom", "Alex", "Sam", "Jennifer"];

// const filteredNames = names.filter(item => item.length < 4)
// console.log(filteredNames);


// const numbers = [-3, 5, -1, 7, 0, -8];

// const positiveNumber = numbers.filter(item => item > 0)
// console.log(positiveNumber);



// reduce
// find


// toLowerCase
// toUpperCase
// length
// charAt
// indexOf
// slice
// replace
// replaceall
// split

// let username = "AbDuLLah"

// console.log(username.toLowerCase());
// console.log(username.toUpperCase());

let cities = [
    "karachi",
    "lahore",
    "islamabad",
    "rawalpindi",
    "faisalabad",
    "multan",
    "peshawar",
    "quetta",
    "hyderabad",
    "sialkot",
    "gujranwala",
    "bahawalpur",
    "sukkur",
    "abbottabad",
    "muzaffarabad"
];


const input = document.querySelector("#city-input");
const h1 = document.querySelector("#result");


function checkCity(){


    // let available = false
    // for(let i = 0; i < cities.length; i++){
    //     if(input.value.toLowerCase() === cities[i]){
    //         h1.innerHTML = "Maalik tum hi zindagi jee rha ho."
    //         available = true
    //         break
    //     }
    // }
    // // !
    // if(!available){
    //     h1.innerHTML = "Maalik tum zindagi kaha jee rha ho guzaar rha ho."

    // }



    // if(cities.includes(input.value.toLowerCase())){
    //     h1.innerHTML = "Maalik tum hi zindagi jee rha ho."
    // } else {
    //     h1.innerHTML = "Maalik tum zindagi kaha jee rha ho guzaar rha ho."
    // }


    // if(cities.indexOf(input.value.toLowerCase()) !== -1){
    //      h1.innerHTML = "Maalik tum zindagi kaha jee rha ho guzaar rha ho."
    // } else {
    //     h1.innerHTML = "Maalik tum hi zindagi jee rha ho."
    // }
}
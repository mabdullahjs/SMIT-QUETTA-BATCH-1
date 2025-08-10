// console.log("hello world");

// let cities = ["karachi" , "lahore" , "quetta" , "islamabad" , "rawalpindi"]


// const ol = document.querySelector("ol");


// for(let i = 0; i < cities.length; i++){
//     console.log(cities[i]);
//     ol.innerHTML += `<li>${cities[i]}</li>`;
// }























// CRUD
// Create
// Read
// Update
// Delete





const input = document.querySelector("#todo");
const ol = document.querySelector("ol");
const allTodo = [];

function renderTodo(){
    ol.innerHTML = ""
     for(let i = 0; i < allTodo.length; i++){
        ol.innerHTML += `<li>${allTodo[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`
    }

}

function addTodo(){
    allTodo.push(input.value)
    renderTodo()
   


    // ol.innerHTML += `<li>${allTodo[allTodo.length - 1]}</li>`
    // console.log(allTodo);
    


    input.value = ""
}



function deleteTodo(index){
    console.log("todo deleted" , index);
    allTodo.splice(index , 1)
    renderTodo()
    

    
}
function editTodo(index){
    console.log("todo edited" , index);
    
}





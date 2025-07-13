console.log("Hello World");

const todoInput = document.querySelector("#todoInput");
const ol = document.querySelector("#list");

const todo = []

function renderTodo(){
    ol.innerHTML = ""
    for(let i = 0; i < todo.length; i++){
        ol.innerHTML += `<li>
        ${todo[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`
    }

}

function addTodo() {
    todo.push(todoInput.value)
    renderTodo()
    todoInput.value = ""
}


function deleteTodo(index){
    todo.splice(index , 1);
    renderTodo()

}
function editTodo(index){
    console.log("todo edited" , todo[index])
}

// const fruits = ["apple" , "banana" , "grapes"];
// fruits.splice(1 , 1 , "updated")
// fruits[1] = "updated"
// console.log(fruits);

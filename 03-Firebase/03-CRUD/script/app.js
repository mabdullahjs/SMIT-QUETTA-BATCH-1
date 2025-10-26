import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { db } from "./firebaseconfig.js";

const form = document.querySelector(".form");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const todoContainer = document.querySelector(".allTodos");

const allTodo = [];

async function getDataFromDB() {
  const q = query(collection(db, "todos"), orderBy("time", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    allTodo.push({ ...doc.data(), docid: doc.id });
  });
  console.log(allTodo);
  renderTodo(allTodo);
}

getDataFromDB();

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userData = {
    title: title.value,
    description: description.value,
    time: Timestamp.fromDate(new Date()),
  };

  try {
    const docRef = await addDoc(collection(db, "todos"), userData);
    console.log("Document written with ID: ", docRef.id);
    allTodo.push({ ...userData, docid: docRef.id });
    renderTodo(allTodo);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

function renderTodo(arr) {
  todoContainer.innerHTML = "";
  arr.map((item) => {
    todoContainer.innerHTML += ` <div class="todo">
            <h1>Title: ${item.title}</h1>
            <h2>Description: ${item.description}.</h2>
            <div class="todo-buttons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        </div>`;
  });
}

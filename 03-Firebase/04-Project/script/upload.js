import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { db } from "./firebaseconfig.js";

let currentUserUID;

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    currentUserUID = uid;
  } else {
    console.log("logi nahi");
    window.location = "login.html";
  }
});

const form = document.getElementById("form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const priceInput = document.getElementById("price");

  const carTitle = titleInput.value;
  const carDescription = descriptionInput.value;
  const carPrice = priceInput.value;

  console.log("Car Title:", carTitle);
  console.log("Description:", carDescription);
  console.log("Price:", carPrice);

  try {
    const docRef = await addDoc(collection(db, "ads"), {
      carTitle , carDescription , carPrice,
      carImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mMqcRYCJDeEBVysy-BNQ07cXezqh7bf-LQ&s'
    });
    console.log("Document written with ID: ", docRef.id);
    alert("ad published")
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

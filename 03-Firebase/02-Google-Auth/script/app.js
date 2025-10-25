import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("logged in user UID ==>" , uid);
    
  } else {
    window.location = "auth.html"
  }
});

const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location = "auth.html";
    })
    .catch((error) => {
      alert("error occured");
    });
});

import { onAuthStateChanged , signOut  } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth , db } from "./firebaseconfig.js";
import {
  collection,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

console.log("hello world");

const userInfoContainer = document.querySelector(".user-info")
const loginContainer = document.querySelector(".login")
const userImage = document.querySelector(".user-img")
const logoutBtn = document.querySelector("#logout-btn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    
    userInfoContainer.style.display = "block"
    loginContainer.style.display = "none"

    getDataFromDB(uid)

    
  } else {
    console.log("logi nahi");
  }
});


async function getDataFromDB(uid) {

  const q = query(
    collection(db, "users"),
    where("uid", "==", uid)
   
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    userImage.src = doc.data().profile
    
  });
}


logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location = "login.html";
    })
    .catch((error) => {
      alert("error occured");
    });
});
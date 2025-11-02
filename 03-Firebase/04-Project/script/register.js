import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { db } from "./firebaseconfig.js";

let uploadImage;
var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "apna cloud name dalna ha",
    uploadPreset: "apna upload preset dalna",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      uploadImage = result.info.secure_url

    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const fullname = document.querySelector("#fullname");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(email.value);
  console.log(password.value);
  console.log(fullname.value);

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log(user.uid);

      try {
        const docRef = await addDoc(collection(db, "users"), {
          fullname: fullname.value,
          email: email.value,
          profile: uploadImage,
          uid: user.uid,
        });
        console.log("Document written with ID: ", docRef.id);
        window.location = "login.html"
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

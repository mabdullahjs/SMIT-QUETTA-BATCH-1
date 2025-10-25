import {
  signInWithPopup,
  GithubAuthProvider,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth, provider, githubProvider } from "./firebaseconfig.js";

const googleBtn = document.querySelector(".google-btn");
const githubBtn = document.querySelector(".github-btn");

googleBtn.addEventListener("click", () => {
  console.log("btn worked");

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      window.location = "index.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

githubBtn.addEventListener("click", () => {
  console.log("login with github");

  signInWithPopup(auth, githubProvider)
    .then((result) => {
     
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

     
      const user = result.user;
      console.log(user);
      window.location = "index.html"
      
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log(errorMessage);
      
    });
});

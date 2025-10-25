import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth , GoogleAuthProvider, GithubAuthProvider  } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCZkYPq6WlW4lZwSv24fDKA8TMaMk9hhL0",
  authDomain: "quetta-batch.firebaseapp.com",
  projectId: "quetta-batch",
  storageBucket: "quetta-batch.firebasestorage.app",
  messagingSenderId: "594245171407",
  appId: "1:594245171407:web:b071ff4fcbf73b41f0dfba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const githubProvider = new GithubAuthProvider();
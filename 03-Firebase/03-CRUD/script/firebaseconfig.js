import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZkYPq6WlW4lZwSv24fDKA8TMaMk9hhL0",
  authDomain: "quetta-batch.firebaseapp.com",
  projectId: "quetta-batch",
  storageBucket: "quetta-batch.firebasestorage.app",
  messagingSenderId: "594245171407",
  appId: "1:594245171407:web:b071ff4fcbf73b41f0dfba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

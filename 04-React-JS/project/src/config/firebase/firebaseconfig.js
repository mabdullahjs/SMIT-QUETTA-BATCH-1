import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAhFA-BfzsSxsRtxh_v7ScvWsN76d6fcYs",
  authDomain: "reactjs-quetta.firebaseapp.com",
  projectId: "reactjs-quetta",
  storageBucket: "reactjs-quetta.firebasestorage.app",
  messagingSenderId: "91644240376",
  appId: "1:91644240376:web:3fbcc0221f253e5e53b60d",
  measurementId: "G-706GK9X7R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
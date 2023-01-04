import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJXIKErcvfeOTjZyad8aOQmCL5LFeWHt0",
  authDomain: "house-marketplace-app-70cb0.firebaseapp.com",
  projectId: "house-marketplace-app-70cb0",
  storageBucket: "house-marketplace-app-70cb0.appspot.com",
  messagingSenderId: "282146427643",
  appId: "1:282146427643:web:f69775b14771c5fae3565e",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

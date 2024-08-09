// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbeERAWos54fpGLViUjf1i2RTmRKmYh0U",
  authDomain: "ai-trip-planner-9db37.firebaseapp.com",
  projectId: "ai-trip-planner-9db37",
  storageBucket: "ai-trip-planner-9db37.appspot.com",
  messagingSenderId: "540285461946",
  appId: "1:540285461946:web:7a39da6e45ebe505f6e983",
  measurementId: "G-7GJL7YP5JK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 

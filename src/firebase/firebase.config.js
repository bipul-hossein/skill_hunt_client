// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiqq8EHRqpJpFxmxW-xXmChZsEZaljqPQ",
  authDomain: "education-site-assign.firebaseapp.com",
  projectId: "education-site-assign",
  storageBucket: "education-site-assign.appspot.com",
  messagingSenderId: "993673926500",
  appId: "1:993673926500:web:f8bd8a2c7475f009484c71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
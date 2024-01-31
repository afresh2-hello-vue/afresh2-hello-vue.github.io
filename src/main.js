// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh6Rw9nknsTd6gMjDK0N5gl6RFCB2tl90",
  authDomain: "afresh2-firebase-vue.firebaseapp.com",
  projectId: "afresh2-firebase-vue",
  storageBucket: "afresh2-firebase-vue.appspot.com",
  messagingSenderId: "360907620651",
  appId: "1:360907620651:web:f5fd5fa2cd83dab0e8456e",
  measurementId: "G-0VY8FMY0WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

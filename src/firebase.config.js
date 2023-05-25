// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXvdRUKU80CecAsFCFGlv44HbYJFjFTfQ",
  authDomain: "otp-project-60053.firebaseapp.com",
  projectId: "otp-project-60053",
  storageBucket: "otp-project-60053.appspot.com",
  messagingSenderId: "861100382512",
  appId: "1:861100382512:web:d5b872c5388125c98b50f5",
  measurementId: "G-8C1N1QJ8FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
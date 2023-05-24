// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcuacWsWot6pfHUpg5hiEeSpj38Rq_iBg",
  authDomain: "otp-project-dffce.firebaseapp.com",
  projectId: "otp-project-dffce",
  storageBucket: "otp-project-dffce.appspot.com",
  messagingSenderId: "217663471589",
  appId: "1:217663471589:web:3640b0c89cd3f964b8b90c",
  measurementId: "G-1GPSR7VJHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

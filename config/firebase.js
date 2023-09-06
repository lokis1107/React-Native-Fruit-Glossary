// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7OyJDc0MBdv4rTKrua5ACaD6zEIxu88s",
  authDomain: "fruit-glossary.firebaseapp.com",
  projectId: "fruit-glossary",
  storageBucket: "fruit-glossary.appspot.com",
  messagingSenderId: "66011821339",
  appId: "1:66011821339:web:fd6ff5a5edb18fefbc4fbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWlu6wRDIn8jH999TYWhmxLi7UJlc5rEo",
  authDomain: "artistic-vistas-auth.firebaseapp.com",
  projectId: "artistic-vistas-auth",
  storageBucket: "artistic-vistas-auth.appspot.com",
  messagingSenderId: "713955462313",
  appId: "1:713955462313:web:cabaf7dd7016401a8c2db8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
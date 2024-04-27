import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,

  apiKey: "AIzaSyCWlu6wRDIn8jH999TYWhmxLi7UJlc5rEo",
  authDomain: "artistic-vistas-auth.firebaseapp.com",
  projectId: "artistic-vistas-auth",
  storageBucket: "artistic-vistas-auth.appspot.com",
  messagingSenderId: "713955462313",
  appId: "1:713955462313:web:cabaf7dd7016401a8c2db8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

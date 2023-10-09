// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGLZ1CrReuu3oRzuiULLYzynvwkHu1zq4",
  authDomain: "assignment-nine-new.firebaseapp.com",
  projectId: "assignment-nine-new",
  storageBucket: "assignment-nine-new.appspot.com",
  messagingSenderId: "447155066696",
  appId: "1:447155066696:web:22339e6169b9afbd76057d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

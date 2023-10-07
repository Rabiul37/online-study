import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCAovAEbBcd6eEXB74y6XsG91Awz4_CkyU",
  authDomain: "assignment-nine-react.firebaseapp.com",
  projectId: "assignment-nine-react",
  storageBucket: "assignment-nine-react.appspot.com",
  messagingSenderId: "597659308143",
  appId: "1:597659308143:web:1aa6d0671d1fcca94f3d9a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

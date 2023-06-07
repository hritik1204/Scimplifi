// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKPWLT-qODFrqQFWCuGYwCm88mFHEYOs8",
  authDomain: "dashboard-388712.firebaseapp.com",
  projectId: "dashboard-388712",
  storageBucket: "dashboard-388712.appspot.com",
  messagingSenderId: "765164466331",
  appId: "1:765164466331:web:a33ea0d4f01e8b61aa963e",
  measurementId: "G-M4FV14J30F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };

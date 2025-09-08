// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWykNxVRUDaccN4dpO7GqEbqar9EjNVyE",
  authDomain: "tutionly-alpha.firebaseapp.com",
  projectId: "tutionly-alpha",
  storageBucket: "tutionly-alpha.firebasestorage.app",
  messagingSenderId: "376106611784",
  appId: "1:376106611784:web:d9dca7d76751ab7ecb947d",
  measurementId: "G-QGR8YHK42N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Providers
export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');
appleProvider.addScope('email');
appleProvider.addScope('name');

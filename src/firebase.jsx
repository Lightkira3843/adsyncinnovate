// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQMnziyEmf-UY7rD3YIAlv7XFffuZOuT4",
  authDomain: "adsyncinnovate-dbd90.firebaseapp.com",
  databaseURL: "https://adsyncinnovate-dbd90-default-rtdb.firebaseio.com",
  projectId: "adsyncinnovate-dbd90",
  storageBucket: "adsyncinnovate-dbd90.appspot.com",
  messagingSenderId: "189931718362",
  appId: "1:189931718362:web:8eae6579272b61c6e447e3",
  measurementId: "G-WBDPL6PMY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);


export default app;
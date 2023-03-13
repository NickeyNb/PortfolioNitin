// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAtAfqVbNTEpXfzokRBvMeuZIKrKEe7WRA",
  authDomain: "nbportfolio.firebaseapp.com",
  projectId: "nbportfolio",
  storageBucket: "nbportfolio.appspot.com",
  messagingSenderId: "189993683185",
  appId: "1:189993683185:web:a4297c2d619403a6be0150"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db=getFirestore();
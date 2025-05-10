// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6Iwo21YN42s6W4mAljRQJoAHfEUira_Y",
  authDomain: "cafe-e-commerce.firebaseapp.com",
  projectId: "cafe-e-commerce",
  storageBucket: "cafe-e-commerce.firebasestorage.app",
  messagingSenderId: "310787139707",
  appId: "1:310787139707:web:110d4bd2fcb57074a39ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

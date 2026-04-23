// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHc19gyalMv09c04SEIqBFudAT1z7zkBU",
  authDomain: "urban-3746f.firebaseapp.com",
  projectId: "urban-3746f",
  storageBucket: "urban-3746f.firebasestorage.app",
  messagingSenderId: "930544116116",
  appId: "1:930544116116:web:7fdd54efd716223c452f81",
  measurementId: "G-QQNFWNX3R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
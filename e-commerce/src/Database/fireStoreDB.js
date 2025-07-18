// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJcwBeIwAMPvnV_iz-h_Oc2q0yagsRXFU",
  authDomain: "e-commerce-c8397.firebaseapp.com",
  projectId: "e-commerce-c8397",
  storageBucket: "e-commerce-c8397.firebasestorage.app",
  messagingSenderId: "425131925066",
  appId: "1:425131925066:web:4f315ebb2d8d9a45d990b3",
  measurementId: "G-QT9YX8RRKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

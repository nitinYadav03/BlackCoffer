import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN40TM3pAkvJRTqr2PYBKM79fvpoEZeBM",
  authDomain: "blackcoffer-3777d.firebaseapp.com",
  projectId: "blackcoffer-3777d",
  storageBucket: "blackcoffer-3777d.firebasestorage.app",
  messagingSenderId: "9817641190",
  appId: "1:9817641190:web:b25566d5f09a3a87d8eb27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

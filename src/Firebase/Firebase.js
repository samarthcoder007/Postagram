import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "postagram-d4a3c.firebaseapp.com",
  projectId: "postagram-d4a3c",
  storageBucket: "postagram-d4a3c.appspot.com",
  messagingSenderId: "274494310038",
  appId: "1:274494310038:web:cee7fb5327db51fac224b7",
  measurementId: "G-74J41QSXJP"
};

initializeApp(firebaseConfig);
const auth = getAuth()
const firestore = getFirestore()
const storage = getStorage()

export {auth, firestore, storage}
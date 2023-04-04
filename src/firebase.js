import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbaEmiS0sa_e7b5fn8qmsRKdXI1TMzw_s",
  authDomain: "react-chat-1e476.firebaseapp.com",
  projectId: "react-chat-1e476",
  storageBucket: "react-chat-1e476.appspot.com",
  messagingSenderId: "234185418114",
  appId: "1:234185418114:web:6f0199757b65744a1e5b9b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

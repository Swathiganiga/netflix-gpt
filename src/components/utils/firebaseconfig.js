// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "netflix-gpt-9c37e.firebaseapp.com",
  projectId: "netflix-gpt-9c37e",
  storageBucket: "netflix-gpt-9c37e.firebasestorage.app",
  messagingSenderId: "203522200456",
  appId: "1:203522200456:web:b32c59f698a49353f3e03d",
  measurementId: "G-G8PN87CKEG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

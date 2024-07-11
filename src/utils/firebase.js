// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiSyvmL9EGxUpBuXdMSSj67bj8I8b2Suc",
  authDomain: "netflixgpt-be61c.firebaseapp.com",
  projectId: "netflixgpt-be61c",
  storageBucket: "netflixgpt-be61c.appspot.com",
  messagingSenderId: "704504963617",
  appId: "1:704504963617:web:077f9499aec3562e7ff960",
  measurementId: "G-V4TY7Q62SC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
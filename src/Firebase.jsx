// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjKrPK3gIYyrIdD5ruRCjoaltAe7hXpJ0",
  authDomain: "croprecommendation-4cd01.firebaseapp.com",
  projectId: "croprecommendation-4cd01",
  storageBucket: "croprecommendation-4cd01.appspot.com",
  messagingSenderId: "1018008923120",
  appId: "1:1018008923120:web:64f7d474d3483542ed4b35",
  measurementId: "G-Q645T3SNJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

const analytics = getAnalytics(app);
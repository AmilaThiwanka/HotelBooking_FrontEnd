// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY6Bv8JsPDuGJekjfcFRsMtBxv7p74Lg0",
  authDomain: "hotel-management-system-9926e.firebaseapp.com",
  projectId: "hotel-management-system-9926e",
  storageBucket: "hotel-management-system-9926e.appspot.com",
  messagingSenderId: "457384497384",
  appId: "1:457384497384:web:692891b4a0c0364908f95d",
  measurementId: "G-QJNRL6TK50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
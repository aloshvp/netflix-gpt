// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVyrIdqO6799UyZKMGA2gSBfLtg-jGhuc",
    authDomain: "netflix-gpt-92c2b.firebaseapp.com",
    projectId: "netflix-gpt-92c2b",
    storageBucket: "netflix-gpt-92c2b.firebasestorage.app",
    messagingSenderId: "684905653546",
    appId: "1:684905653546:web:7ad2d5a881a22458cbea53",
    measurementId: "G-BFM3J73P98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
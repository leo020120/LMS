// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpmc8GsnkbTz7AZlPwIpgCrGgb-4Jq64s",
  authDomain: "lastmanstanding-56915.firebaseapp.com",
  projectId: "lastmanstanding-56915",
  storageBucket: "lastmanstanding-56915.appspot.com",
  messagingSenderId: "368212276445",
  appId: "1:368212276445:web:31f6597ccb2b9346aad734",
  measurementId: "G-S7J43K01LP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const firestore = app.firestore();

export {app, analytics, firestore}
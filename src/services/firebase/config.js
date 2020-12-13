

import firebase from "firebase";
import "firebase/auth";

//2. Initialize app with the config vars
const app = firebase.initializeApp({
  apiKey: "AIzaSyDFtiSnzjZxsY9StJh_DjkG_h-7WZrDMfg",
  authDomain: "car-rental-company-a1000.firebaseapp.com",
  projectId: "car-rental-company-a1000",
  storageBucket: "car-rental-company-a1000.appspot.com",
  messagingSenderId: "742372854829",
  appId: "1:742372854829:web:1e8037df63c9d151003ca4",
  measurementId: "G-D0ZSYQ5QV2"
});

export default app;
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6fLysW60DDJmXEFUUMtjSGHEcjyk4z6E",
  authDomain: "react-blog-48cec.firebaseapp.com",
  projectId: "react-blog-48cec",
  storageBucket: "react-blog-48cec.appspot.com",
  messagingSenderId: "547489006769",
  appId: "1:547489006769:web:376efb751ea77d31870e90"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
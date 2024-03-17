// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjKCZYqcMGhVEBDEkGPmwg8ernSqxo1Xw",
  authDomain: "login-bf86a.firebaseapp.com",
  projectId: "login-bf86a",
  storageBucket: "login-bf86a.appspot.com",
  messagingSenderId: "162782854173",
  appId: "1:162782854173:web:35e3477fc699b63b5b9af4"
};

// Initialize Firebase

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth();
export {auth};
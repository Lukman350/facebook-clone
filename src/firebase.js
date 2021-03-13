import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYv2UfVzUAfJMK_HOkzREC215OBxm65Mo",
  authDomain: "facebook-clone-d6e9a.firebaseapp.com",
  projectId: "facebook-clone-d6e9a",
  storageBucket: "facebook-clone-d6e9a.appspot.com",
  messagingSenderId: "644496762370",
  appId: "1:644496762370:web:859e364486cd82b52aa91b",
  measurementId: "G-C8TD6D8L90",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

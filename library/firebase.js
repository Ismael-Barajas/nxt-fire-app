import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJzK-NmsrajsO1Z0zGpqXEc8CU9Nr_EhQ",
  authDomain: "nxt-fire-app.firebaseapp.com",
  projectId: "nxt-fire-app",
  storageBucket: "nxt-fire-app.appspot.com",
  messagingSenderId: "1074200402448",
  appId: "1:1074200402448:web:a31b7b70f41538d2244895",
  measurementId: "G-SY1PWQSHPR",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

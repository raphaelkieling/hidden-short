import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC8RAeXPY_dynOY4OgVCK2cmTTdCMRcsec",
  authDomain: "hidden-short.firebaseapp.com",
  databaseURL: "https://hidden-short.firebaseio.com",
  projectId: "hidden-short",
  storageBucket: "hidden-short.appspot.com",
  messagingSenderId: "767468991951",
  appId: "1:767468991951:web:84da7d759708fd18baceba",
  measurementId: "G-ENDCHK3QLM",
};

try {
  firebase.initializeApp(config);
} catch {
  console.log("Error on initialize firebase");
}

export const firestore = firebase.firestore();
export default firebase;

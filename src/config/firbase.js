import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8vuz-l-pa5Jgaw34yA3Qtl3Wxsx6gksQ",
  authDomain: "give-away-30c69.firebaseapp.com",
  projectId: "give-away-30c69",
  storageBucket: "give-away-30c69.appspot.com",
  messagingSenderId: "245972104493",
  appId: "1:245972104493:web:a2acde139c7b910f680fa4",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

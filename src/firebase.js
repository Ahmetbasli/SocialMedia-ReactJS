import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDvEKDdNAbPoUF2oC7EpOmTUWoOzDDCdLQ",
  authDomain: "linkedin-clone-df73b.firebaseapp.com",
  projectId: "linkedin-clone-df73b",
  storageBucket: "linkedin-clone-df73b.appspot.com",
  messagingSenderId: "336161863001",
  appId: "1:336161863001:web:41134de24079877a004848",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const authentication = firebase.auth();

export { db, authentication };

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAyp_ZDil-_N0vNFXhVqGkpTHZRig9hDsE",
    authDomain: "voiceproj-fc9b3.firebaseapp.com",
    projectId: "voiceproj-fc9b3",
    storageBucket: "voiceproj-fc9b3.appspot.com",
    messagingSenderId: "662743407071",
    appId: "1:662743407071:web:918b6e8c72364e3535cc6a",
    measurementId: "G-RHMYTDC1MX"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();

export default db;
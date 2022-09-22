import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDAGtkoVKRmxnIiaZBoN3v8avruG_s9Z5E",
    authDomain: "twitter-clone-bd564.firebaseapp.com",
    projectId: "twitter-clone-bd564",
    storageBucket: "twitter-clone-bd564.appspot.com",
    messagingSenderId: "1037520873287",
    appId: "1:1037520873287:web:7c8d1b65e945733f7ace62",
    measurementId: "G-GQ0VWJLDLW"
  };

  const firebaseApp = firebaseinitializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;
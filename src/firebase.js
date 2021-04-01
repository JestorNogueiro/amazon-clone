import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDPCW7MrfoY7vzxHCRP1nqsniEKEusyYHM",
  authDomain: "clone-aac90.firebaseapp.com",
  projectId: "clone-aac90",
  storageBucket: "clone-aac90.appspot.com",
  messagingSenderId: "690533454894",
  appId: "1:690533454894:web:607eeaf3e2c2f0111e3bbf",
  measurementId: "G-8WJ91B3326",
});
const auth = firebase.auth();

// firebase.initializeApp(firebaseConfig);
firebase.analytics();

export { auth };

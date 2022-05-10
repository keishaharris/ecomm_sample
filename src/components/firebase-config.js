import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDYMZiTnaGeOyYlVnTGwyteRUieSgDY6Vo",
  authDomain: "ecomm-sample-74021.firebaseapp.com",
  projectId: "ecomm-sample-74021",
  storageBucket: "ecomm-sample-74021.appspot.com",
  messagingSenderId: "948642961584",
  appId: "1:948642961584:web:2ef620226dd44060f70375",
  measurementId: "G-3DWBFBEVZH"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
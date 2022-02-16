import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDtyOnuqixXC_zFWcVjXmxiN3RcRHi3pIQ",
  authDomain: "clone-de741.firebaseapp.com",
  projectId: "clone-de741",
  storageBucket: "clone-de741.appspot.com",
  messagingSenderId: "62633095394",
  appId: "1:62633095394:web:039b316a282d3e86c6eebb",
  measurementId: "G-5D77J3Q13T"
  
});

// Initialize Firebase
const auth = firebase.auth();

export { auth };
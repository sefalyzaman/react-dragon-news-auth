// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOsChPfegrzNgOSHpMM4DVABLWLM8j0B4",
  authDomain: "react-dragon-news-auth-2a03e.firebaseapp.com",
  projectId: "react-dragon-news-auth-2a03e",
  storageBucket: "react-dragon-news-auth-2a03e.appspot.com",
  messagingSenderId: "1040002464839",
  appId: "1:1040002464839:web:ce7c4666be12c7c85e0562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// const auth = getAuth(app);
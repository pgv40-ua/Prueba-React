// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpgiNXHI9bp2D27pDAYLthhBBXjV88IRY",
  authDomain: "fir-login-af290.firebaseapp.com",
  projectId: "fir-login-af290",
  storageBucket: "fir-login-af290.appspot.com",
  messagingSenderId: "737714336773",
  appId: "1:737714336773:web:46d693437a9f57028bd86c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth}
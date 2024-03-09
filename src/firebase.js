// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0mrE50A8WMfdwVpNNaBV3HA3Gr5KakZM",
  authDomain: "hackathon-b0a9c.firebaseapp.com",
  projectId: "hackathon-b0a9c",
  storageBucket: "hackathon-b0a9c.appspot.com",
  messagingSenderId: "600161799942",
  appId: "1:600161799942:web:83ee9e5dc4d11dedfa9887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export {db , auth}
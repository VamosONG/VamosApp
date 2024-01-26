// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_gOb_ho8ZggK2LK9gBuEQDb2PEgiO5fk",
  authDomain: "pf-henry-vamosapp.firebaseapp.com",
  projectId: "pf-henry-vamosapp",
  storageBucket: "pf-henry-vamosapp.appspot.com",
  messagingSenderId: "553385911195",
  appId: "1:553385911195:web:830e8185aae040c2d3773e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);

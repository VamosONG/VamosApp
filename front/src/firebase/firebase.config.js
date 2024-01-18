// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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
const db = getFirestore(app)
export const auth= getAuth(app)

// async function getUsers(db) {
//     const usersCol = collection(db, 'users');
//     const userSnapshot = await getDocs(usersCol);
//     const userList = userSnapshot.docs.map(doc => doc.data());
//     console.log(userList);
//     return userList;
// }  
// console.log(getUsers(db));
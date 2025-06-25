// // src/firebase.js
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCl9rxFwUeIJNLxgZgOkBt2fU8DnW6blJo',
//   authDomain: 'idassure.firebaseapp.com',
//   projectId: 'idassure',
//   storageBucket: 'idassure.firebasestorage.app',
//   messagingSenderId: '733234409500',
//   appId: '1:733234409500:web:680a1400d3edb5f5d9afd9',
//   measurementId: 'G-J2K5K8D3ZV',
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCl9rxFwUeIJNLxgZgOkBt2fU8DnW6blJo",
  authDomain: "idassure.firebaseapp.com",
  projectId: "idassure",
  storageBucket: "idassure.appspot.com",
  messagingSenderId: "733234409500",
  appId: "1:733234409500:web:680a1400d3edb5f5d9afd9",
  measurementId: "G-J2K5K8D3ZV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

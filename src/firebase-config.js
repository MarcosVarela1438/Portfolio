// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1OOgURhxvykH5QPZlv-ydmBjOUhTldUo",
  authDomain: "portfolio-marcos-varela.firebaseapp.com",
  projectId: "portfolio-marcos-varela",
  storageBucket: "portfolio-marcos-varela.appspot.com",
  messagingSenderId: "413516631353",
  appId: "1:413516631353:web:1b19ec8bda0811ed11ece8"
};

const app = initializeApp(firebaseConfig);

export  { app }
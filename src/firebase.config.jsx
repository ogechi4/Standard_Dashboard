// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEMZ7_ETu6pbJpNMep0a7RQdvPa8eC93Y",
  authDomain: "fir-a0ed9.firebaseapp.com",
  projectId: "fir-a0ed9",
  storageBucket: "fir-a0ed9.appspot.com",
  messagingSenderId: "233784651241",
  appId: "1:233784651241:web:6d60f052b136cb37e6af78",
  measurementId: "G-LYS6TH3DXD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseConfig
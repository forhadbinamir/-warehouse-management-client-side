// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASdiZ8GKDRNKqqlh4HgLnhV1_pUZPE3i4",
    authDomain: "warehouse-management-sys-a95b8.firebaseapp.com",
    projectId: "warehouse-management-sys-a95b8",
    storageBucket: "warehouse-management-sys-a95b8.appspot.com",
    messagingSenderId: "511792400400",
    appId: "1:511792400400:web:24fb928f5b56379de96295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;

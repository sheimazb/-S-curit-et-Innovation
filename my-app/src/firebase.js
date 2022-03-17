import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAzb_pz6AoZ2A-qbOvaQkAlwLZTXVQao6I",
    authDomain: "fire-gaz-detection.firebaseapp.com",
    databaseURL: "https://fire-gaz-detection-default-rtdb.firebaseio.com",
    projectId: "fire-gaz-detection",
    storageBucket: "fire-gaz-detection.appspot.com",
    messagingSenderId: "946490311294",
    appId: "1:946490311294:web:c67c123bb46c75e873ce2f",
    measurementId: "G-KV22WPEGZL"
};

// Initialize Firebase and Realtime database
// See official docs: https://firebase.google.com/docs/database/web/read-and-write
const app = initializeApp(firebaseConfig);
const fireDb = getDatabase(app);


export { fireDb }
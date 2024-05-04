import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase-config';
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Firebase Emulators:
connectFirestoreEmulator(db, '127.0.0.1', 8080);
connectAuthEmulator(auth, "http://127.0.0.1:9099");
// services/firebase.ts
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcNykGCBHZagIRRCiSr9QjPi9GXKGYR9s",
  authDomain: "family-tasks-app-d061a.firebaseapp.com",
  projectId: "family-tasks-app-d061a",
  storageBucket: "family-tasks-app-d061a.appspot.com", // исправленный bucket
  messagingSenderId: "46489114725",
  appId: "1:46489114725:web:189f5ecd2d114336f64e8c",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

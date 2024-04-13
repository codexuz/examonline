import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDF9VuBa0ZlqlKOknj3IrdE--olEiN5DPQ",
  authDomain: "exam-database-2eb01.firebaseapp.com",
  projectId: "exam-database-2eb01",
  storageBucket: "exam-database-2eb01.appspot.com",
  messagingSenderId: "813791000692",
  appId: "1:813791000692:web:b423c8aeb48652832ff921"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

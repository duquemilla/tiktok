
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBv5lxTch8ClgUT-QrHuii5JWz8JIaiL7c",
  authDomain: "tiktok---jornada-fc421.firebaseapp.com",
  projectId: "tiktok---jornada-fc421",
  storageBucket: "tiktok---jornada-fc421.appspot.com",
  messagingSenderId: "762321464361",
  appId: "1:762321464361:web:d1570d0cbe3677b0bb8038"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
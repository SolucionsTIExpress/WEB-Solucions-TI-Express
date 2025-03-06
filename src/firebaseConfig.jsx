// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuración de Firebase (Reemplaza con tus credenciales)
const firebaseConfig = {
  apiKey: "AIzaSyCnje5z1LrhT9WdL3wQI4XzDSYekCKuQqU",
  authDomain: "stiexpress.firebaseapp.com",
  projectId: "stiexpress",
  storageBucket: "stiexpress.firebasestorage.app",
  messagingSenderId: "382867412056",
  appId: "1:382867412056:web:45ec300b59cdec1349e62d",
  measurementId: "G-2VL1RSHN7J",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };

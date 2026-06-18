// Importações Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Configuração do seu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDQ1Aj_r9d3E26aky8R3wb1c5YtlDC5LS4",
  authDomain: "duduchat-43b42.firebaseapp.com",
  projectId: "duduchat-43b42",
  storageBucket: "duduchat-43b42.firebasestorage.app",
  messagingSenderId: "658458417869",
  appId: "1:658458417869:web:c884e7666e138130a7e784"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("API REAL:", firebaseConfig.apiKey);
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "duduchat-43b42.firebaseapp.com",
  projectId: "duduchat-43b42",
  storageBucket: "duduchat-43b42.firebasestorage.app",
  messagingSenderId: "658458417869",
  appId: "1:658458417869:web:c884e7666e138130a7e784"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

console.log("Firebase iniciado");
import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const userInfo = document.getElementById("userInfo");
const logoutBtn = document.getElementById("logoutBtn");
const messagesDiv = document.getElementById("messages");
const sendBtn = document.getElementById("sendBtn");
const msgInput = document.getElementById("msgInput");

let userLogado = null;

// 🔐 LOGIN
onAuthStateChanged(auth, (user) => {

  if (!user) {
    window.location.href = "index.html";
    return;
  }

  userLogado = user;

  const nome = user.email.split("@")[0];

  userInfo.innerHTML = `
    <h3>${nome}</h3>
    <p>${user.email}</p>
  `;

});

// 🚪 LOGOUT
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});

// 💬 ENVIAR MENSAGEM PRO
sendBtn.addEventListener("click", async () => {

  const texto = msgInput.value.trim();
  if (!texto) return;

  await addDoc(collection(db, "mensagens"), {
    texto,
    usuario: userLogado.email,
    uid: userLogado.uid,
    criadoEm: serverTimestamp()
  });

  msgInput.value = "";
});

// 📡 MENSAGENS EM TEMPO REAL PRO
const q = query(collection(db, "mensagens"), orderBy("criadoEm"));

onSnapshot(q, (snapshot) => {

  messagesDiv.innerHTML = "";

  snapshot.forEach((doc) => {

    const msg = doc.data();

    const isEu = msg.uid === userLogado.uid;

    messagesDiv.innerHTML += `
      <div class="msg ${isEu ? "eu" : "outro"}">
        <div class="bubble">
          <span>${msg.texto}</span>
          <small>${msg.usuario.split("@")[0]}</small>
        </div>
      </div>
    `;

  });

  messagesDiv.scrollTop = messagesDiv.scrollHeight;

});
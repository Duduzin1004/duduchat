import { auth } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const userInfo = document.getElementById("userInfo");

onAuthStateChanged(auth, (user) => {

  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const nome = user.email.split("@")[0];

  userInfo.innerHTML = `
    <h3>${nome}</h3>
    <button id="logoutBtn">Sair</button>
  `;

  document
    .getElementById("logoutBtn")
    .addEventListener("click", async () => {

      await signOut(auth);

      window.location.href = "index.html";

    });

});
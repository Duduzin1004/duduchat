import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  try {

    await signInWithEmailAndPassword(
      auth,
      email,
      senha
    );

    window.location.href = "bate-papo.html";

  } catch (e) {

    erro.textContent = "Email ou senha incorretos";

    console.error(e);

  }

});
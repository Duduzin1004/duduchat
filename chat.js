import { auth, db } from "./firebase.js";

console.log("CHAT INICIOU");

const userInfo = document.getElementById("userInfo");

console.log("userInfo:", userInfo);
import {
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const userInfo = document.getElementById("userInfo");
console.log("userInfo:", userInfo);

function gerarID() {
  return Math.floor(
    100000 + Math.random() * 900000
  ).toString();
}

onAuthStateChanged(auth, async (user) => {

  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const userRef = doc(db, "users", user.uid);

  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {

    await setDoc(userRef, {
      nome: user.email.split("@")[0],
      email: user.email,
      id: gerarID()
    });

  }

  const dados = (await getDoc(userRef)).data();

  userInfo.innerHTML = `
    <h3>${dados.nome}</h3>
    <p>ID: ${dados.id}</p>
    <br>
    <button id="logoutBtn">Sair</button>
  `;

  document
    .getElementById("logoutBtn")
    .addEventListener("click", async () => {

      await signOut(auth);

      window.location.href = "index.html";

    });

});
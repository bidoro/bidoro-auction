// ✅ Import the Firebase SDK (using modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// ✅ Your Firebase config — replace with YOUR real values!
const firebaseConfig = {
  apiKey: "AIzaSyCSSR9nbV1c7YX3e-hIXhlCWMaJh368KVQ",
  authDomain: "bidoro-auction-26b9f.firebaseapp.com",
  projectId: "bidoro-auction-26b9f",
  storageBucket: "bidoro-auction-26b9f.firebasestorage.app",
  messagingSenderId: "59398939018",
  appId: "1:59398939018:web:a1c055705c4d9d76952873"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("✅ Firebase connected!");

const translations = {
  en: {
    hero_title: "Buy or Sell Cars – Fast & Secure!",
    hero_subtitle: "Verified bidders, 24h–7 day flexible auctions"
    // Add more keys!
  },
  lv: {
    hero_title: "Pērc vai pārdod auto – ātri un droši!",
    hero_subtitle: "Apstiprināti solītāji, elastīgas izsoles 24h–7 dienas"
  },
  ru: {
    hero_title: "Купи или продай авто – быстро и безопасно!",
    hero_subtitle: "Подтвержденные участники, гибкие аукционы 24ч–7 дней"
  }
};

const switcher = document.getElementById("language-switcher");

switcher.addEventListener("change", () => {
  const lang = switcher.value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
});

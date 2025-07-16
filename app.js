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
    hero_subtitle: "Verified bidders, 24h-7 day flexible auctions",
    list_car: "List Your Car",
    browse_auctions: "Browse Auctions",
    how_it_works_title: "How It Works",
    step1: "Register & Verify",
    step2: "List or Bid",
    step3: "Connect & Complete Sale",
    why_trust_title: "Why Trust Us",
    trust1: "Verified ID for buyers & sellers",
    trust2: "Secure bids – no fake bidding",
    trust3: "Local LV/ENG/RUS support"
  },
  lv: {
    hero_title: "Pērc vai pārdod auto – Ātri un droši!",
    hero_subtitle: "Verificēti solītāji, 24/7 elastīgas izsoles",
    list_car: "Pievienot Auto",
    browse_auctions: "Apskatīt Izsoles",
    how_it_works_title: "Kā tas darbojas",
    step1: "Reģistrējies un verificē",
    step2: "Pievieno vai piedalies izsolē",
    step3: "Savienojies un pabeidz darījumu",
    why_trust_title: "Kāpēc uzticēties mums",
    trust1: "Verificēti pircēji un pārdevēji",
    trust2: "Droši darījumi – bez viltus solījumiem",
    trust3: "Vietējais LV/ENG/RUS atbalsts"
  },
  ru: {
    hero_title: "Купи или продай авто – Быстро и безопасно!",
    hero_subtitle: "Проверенные участники, 24/7 гибкие аукционы",
    list_car: "Разместить Авто",
    browse_auctions: "Просмотр Аукционов",
    how_it_works_title: "Как это работает",
    step1: "Зарегистрируйтесь и подтвердите",
    step2: "Разместите или участвуйте в торгах",
    step3: "Заключите сделку",
    why_trust_title: "Почему доверять нам",
    trust1: "Проверенные покупатели и продавцы",
    trust2: "Безопасные торги – без фальшивых ставок",
    trust3: "Местная поддержка LV/ENG/RUS"
  }
};

const languageSelector = document.getElementById("languageSwitcher");

languageSelector.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[selectedLang][key];
  });
});

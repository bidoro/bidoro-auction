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

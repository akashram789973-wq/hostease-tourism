import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKgYoRJ0ayyz24EdBY_cE3Le4CxcS6dOs",
  authDomain: "hostease-tourism.firebaseapp.com",
  projectId: "hostease-tourism",
  storageBucket: "hostease-tourism.firebasestorage.app",
  messagingSenderId: "67540424685",
  appId: "1:67540424685:web:4e526c80ccfb5f477079e4",
  measurementId: "G-CFCLX8P48F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
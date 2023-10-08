import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjnlvANg1o2iVbWGClcUVvhtuccrsv7cY",
  authDomain: "twenv-4dcbc.firebaseapp.com",
  databaseURL: "https://twenv-4dcbc-default-rtdb.firebaseio.com",
  projectId: "twenv-4dcbc",
  storageBucket: "twenv-4dcbc.appspot.com",
  messagingSenderId: "469741584116",
  appId: "1:469741584116:web:966dccdc818b3d6675a8a1",
  measurementId: "G-VSCWQS79N8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

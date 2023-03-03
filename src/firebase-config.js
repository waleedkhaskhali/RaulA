import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAigpzfG5pgT1mCMPLmFIJe1FTyicr5a9E",
  authDomain: "raul-avila.firebaseapp.com",
  projectId: "raul-avila",
  storageBucket: "raul-avila.appspot.com",
  messagingSenderId: "100540869473",
  appId: "1:100540869473:web:ffc621b61b59058c857320",
  measurementId: "G-4DX5ZH5L4B",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

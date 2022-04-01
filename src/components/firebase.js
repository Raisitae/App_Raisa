import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5yN87W0q8A2nmIbIpi0VVyx_xi8s4XE8",
  authDomain: "app-react-coderhouse-f7a2f.firebaseapp.com",
  projectId: "app-react-coderhouse-f7a2f",
  storageBucket: "app-react-coderhouse-f7a2f.appspot.com",
  messagingSenderId: "639721064922",
  appId: "1:639721064922:web:997db685129b9e6305d8e3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

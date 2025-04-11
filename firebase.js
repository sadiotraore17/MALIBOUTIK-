
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKavVAAXnKS_sI1u92tNYeSAHeO6_W4Eg",
  authDomain: "maliboutik-a7eb8.firebaseapp.com",
  projectId: "maliboutik-a7eb8",
  storageBucket: "maliboutik-a7eb8.appspot.com",
  messagingSenderId: "296272286107",
  appId: "1:296272286107:web:c6a22c6321ddc54118113e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

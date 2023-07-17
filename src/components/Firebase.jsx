import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC4r6XRoKaIbiDfgnMxN5t0WJJErdXLcZE",
  authDomain: "chatapp-ccb20.firebaseapp.com",
  projectId: "chatapp-ccb20",
  storageBucket: "chatapp-ccb20.appspot.com",
  messagingSenderId: "335248355779",
  appId: "1:335248355779:web:6a26dddd64fa7986200d76"
};


export const app = initializeApp(firebaseConfig);
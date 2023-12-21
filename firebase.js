import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDNuE-tmsoePb4YKjWjv5lxzTf31BKPv9A",
    authDomain: "word-game-react-native.firebaseapp.com",
    projectId: "word-game-react-native",
    storageBucket: "word-game-react-native.appspot.com",
    messagingSenderId: "9624709436",
    appId: "1:9624709436:web:95cf104361084430a39639",
    measurementId: "G-CSFXHYEBX6"
};

const app = initializeApp(firebaseConfig);
const persistence = getReactNativePersistence(AsyncStorage);

const auth = initializeAuth(app, {
  persistence,
});

const db = getFirestore();

export {
auth,
db
}
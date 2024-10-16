import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-NRvLO_ReZWwxwS3ovkXhlhoi-KsXNxo",
  authDomain: "simple-blog-dda70.firebaseapp.com",
  projectId: "simple-blog-dda70",
  storageBucket: "simple-blog-dda70.appspot.com",
  messagingSenderId: "841806740048",
  appId: "1:841806740048:web:e73f868b2c77e4e7a76f55",
}
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

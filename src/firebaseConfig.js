import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// The blog's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-UcaJHE16kwGeJhq7-p3LE5xFBk6pKtA",
  authDomain: "some-blog-95292.firebaseapp.com",
  projectId: "some-blog-95292",
  storageBucket: "some-blog-95292.appspot.com",
  messagingSenderId: "404049307848",
  appId: "1:404049307848:web:4d06ad10a732e549ef1dfd",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

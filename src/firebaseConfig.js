import { initializeApp } from "firebase/app"
import { getFirestore /* and maybe other things */ } from "firebase/firestore"
import { getAuth /* and maybe other things */ } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB54APBvLo7siU-yocF6ZCU83K91XD-t64",
  authDomain: "simple-blog-3d9fe.firebaseapp.com",
  projectId: "simple-blog-3d9fe",
  storageBucket: "simple-blog-3d9fe.appspot.com",
  messagingSenderId: "535468977670",
  appId: "1:535468977670:web:592e02a85e09a772a61d87",
}

// Initialize Firebase
const app = initializeApp({
  /* Your config */
})
const db = getFirestore(app)
const auth = getAuth(app)

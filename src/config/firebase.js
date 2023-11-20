
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgjzySDWsSjgVK8TTUeU-bCwAZ4IvQVs4",
  authDomain: "react-todo-4c78d.firebaseapp.com",
  projectId: "react-todo-4c78d",
  storageBucket: "react-todo-4c78d.appspot.com",
  messagingSenderId: "43831344641",
  appId: "1:43831344641:web:14ee98df1602ae9cd78a00",
  measurementId: "G-72SYSYL059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
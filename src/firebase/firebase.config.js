// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7wX3BVFqhBwFKBtgfFGEJIcVGayDtSZM",
  authDomain: "fir-authentication-test-269d0.firebaseapp.com",
  projectId: "fir-authentication-test-269d0",
  storageBucket: "fir-authentication-test-269d0.appspot.com",
  messagingSenderId: "431466629337",
  appId: "1:431466629337:web:801b43a97a9b635e5a96c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
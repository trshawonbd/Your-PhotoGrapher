import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDlXJOqHLO24elGikoiu8HaMwKU1kXXV50",
  authDomain: "your-photographer.firebaseapp.com",
  projectId: "your-photographer",
  storageBucket: "your-photographer.appspot.com",
  messagingSenderId: "760520166004",
  appId: "1:760520166004:web:fe975bf900024faf525f21"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
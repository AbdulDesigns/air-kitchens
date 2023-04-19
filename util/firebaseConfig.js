import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDFl17ECWYeUCZ43HypHILuKK2enhWsZiE",
  authDomain: "airkitchens-ac99d.firebaseapp.com",
  projectId: "airkitchens-ac99d",
  storageBucket: "airkitchens-ac99d.appspot.com",
  messagingSenderId: "378988175626",
  appId: "1:378988175626:web:a467b25c7f05ad7b95daf3",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

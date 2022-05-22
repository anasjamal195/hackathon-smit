import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";




const firebaseConfig = {

  apiKey: "AIzaSyATgO7xrkrpiScU8_KbqpCF8CzEVwgr3VI",

  authDomain: "ecom-react-f690e.firebaseapp.com",

  projectId: "ecom-react-f690e",

  storageBucket: "ecom-react-f690e.appspot.com",

  messagingSenderId: "82375354637",

  appId: "1:82375354637:web:18dc1df75ff2e463572844",

  measurementId: "G-FYTVBX9HES"

};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
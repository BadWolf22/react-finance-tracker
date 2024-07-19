import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-LsZRhe2RsySaESlGD9XMhKdLSoRlwRg",
    authDomain: "react-finance-tracker-e8d04.firebaseapp.com",
    projectId: "react-finance-tracker-e8d04",
    storageBucket: "react-finance-tracker-e8d04.appspot.com",
    messagingSenderId: "1022959594461",
    appId: "1:1022959594461:web:2d25858d8767c79e0aa434"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();
const authServer = getAuth();

export { authServer, firestore };

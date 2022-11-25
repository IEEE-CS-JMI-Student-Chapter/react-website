import { initializeApp } from 'firebase/app';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions'




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOcenEK8EDhw2VG35Lf_EUoBxEjY_FXq4",
    authDomain: "ieee-cs-d6484.firebaseapp.com",
    databaseURL: "https://ieee-cs-d6484-default-rtdb.firebaseio.com",
    projectId: "ieee-cs-d6484",
    storageBucket: "ieee-cs-d6484.appspot.com",
    messagingSenderId: "1072043235444",
    appId: "1:1072043235444:web:7a600adbfc9242e0b21921",
    measurementId: "G-QEQV2DCJFX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app);

if (window.location.hostname === "localhost") {
    connectFunctionsEmulator(functions, "localhost", 5001);
}




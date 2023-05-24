import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyD2XDBNWVvNSjA5Xn0l2EfUFCb8vQwEsBM",
    authDomain: "myplant-a9731.firebaseapp.com",
    databaseURL: "https://myplant-a9731-default-rtdb.firebaseio.com",
    projectId: "myplant-a9731",
    storageBucket: "myplant-a9731.appspot.com",
    messagingSenderId: "836700780435",
    appId: "1:836700780435:web:2cb4c9b71b5751960b9a66",
    measurementId: "G-Y9NPXYP0V0",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

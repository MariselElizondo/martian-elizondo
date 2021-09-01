import firebase from "firebase"
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCXJ3_KD3hz4sBQo-Sz8KNDdUhv0Wcn0MU",
    authDomain: "martian-f76e5.firebaseapp.com",
    projectId: "martian-f76e5",
    storageBucket: "martian-f76e5.appspot.com",
    messagingSenderId: "106636491685",
    appId: "1:106636491685:web:4aa81ac1cf96537228c64c",
    measurementId: "G-8YHT55E7TX"
};
// Initialize Firebase
const appFirebase = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export function getFirestore(){
    return firebase.firestore(appFirebase)
}
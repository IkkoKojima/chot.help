import firebase from 'firebase/app';
import 'firebase/auth';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCHkc_SWRj1R0sgjiwxjwNIFi4QRxJUhH0",
        authDomain: "chot-help.firebaseapp.com",
        databaseURL: "https://chot-help.firebaseio.com",
        projectId: "chot-help",
        storageBucket: "chot-help.appspot.com",
        messagingSenderId: "57272459214",
        appId: "1:57272459214:web:47d9152fccc09e9eb0d59f",
        measurementId: "G-R2XQNB6B6Y"
    })
}

export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const providerTwitter = new firebase.auth.TwitterAuthProvider();
export default firebase;

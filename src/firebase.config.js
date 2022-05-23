import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDizYiKROCyJmgk050-pnGGtFTIFMtNyX0",
    authDomain: "projectpbf-tokobuku.firebaseapp.com",
    projectId: "projectpbf-tokobuku",
    storageBucket: "projectpbf-tokobuku.appspot.com",
    messagingSenderId: "909515847052",
    appId: "1:909515847052:web:6251c7a5754b2b4a9812a9",
    measurementId: "G-3TM71PRB7D"

};

firebase.initializeApp(config);
firebase.firestore().settings(settings);
const auth = getAuth();

export default firebase;
export function register(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
}
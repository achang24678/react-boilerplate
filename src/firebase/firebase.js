import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


// Initialize Firebase
const config = {
    apiKey:`AIzaSyDMEHPiQxvP1svyyXlAqD3KBu-t0_Ai2cU`,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:`https://blog-app-9a306.firebaseio.com`,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_SOTRAGE_BUCKE,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

const database = firebase.database();
// we use google provider for authentication here
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };

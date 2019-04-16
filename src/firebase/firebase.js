import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


// Initialize Firebase
const config = {
    apiKey:"AIzaSyDMEHPiQxvP1svyyXlAqD3KBu-t0_Ai2cU",
    authDomain:"blog-app-9a306.firebaseapp.com",
    databaseURL: "https://blog-app-9a306.firebaseio.com",
    projectId: "blog-app-9a306",
    storageBucket: "blog-app-9a306.appspot.com",
    messagingSenderId: "450638869260"
};
firebase.initializeApp(config);

const database = firebase.database();
// we use google provider for authentication here
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };

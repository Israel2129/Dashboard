// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBumFse0DAMntS1hgEActEz2-3k3v-ykgM',
    authDomain: 'dashprueba-285b4.firebaseapp.com',
    databaseURL: 'https://dashprueba-285b4-default-rtdb.firebaseio.com',
    projectId: 'dashprueba-285b4',
    storageBucket: 'dashprueba-285b4.firebasestorage.app',
    messagingSenderId: '516356490362',
    appId: '1:516356490362:web:061741fa3b67425c45a7c3',
    measurementId: 'G-9RMR57EVK7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

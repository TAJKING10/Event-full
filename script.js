import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUSHMa18joXtHUisJxMjRAC6DAQNEY5Io",
    authDomain: "culturalevent-96bce.firebaseapp.com",
    projectId: "culturalevent-96bce",
    storageBucket: "culturalevent-96bce.appspot.com",
    messagingSenderId: "448048937580",
    appId: "1:448048937580:web:384071435e9695b899f649",
    measurementId: "G-JH4N0SHFS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

// Function to handle saving "hi" to Firestore
const saveHiToFirestore = async () => {
    try {
        // Add "hi" to Firestore
        await addDoc(collection(db, 'messages'), {
            message: 'hi'
        });
        console.log('Message "hi" added to Firestore');
    } catch (error) {
        console.error('Error adding message to Firestore: ', error);
    }
};

// Add event listener to saveButton
const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', saveHiToFirestore);

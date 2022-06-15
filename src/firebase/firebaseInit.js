import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDdYmZ0jCMNehY6NOG-PpjPiGPbpSsccNY",
    authDomain: "fire-blog-ec4b9.firebaseapp.com",
    projectId: "fire-blog-ec4b9",
    storageBucket: "fire-blog-ec4b9.appspot.com",
    messagingSenderId: "944634462994",
    appId: "1:944634462994:web:21d536cd7b160a97da69cb"
  };

firebase.initializeApp( firebaseConfig );
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { timeStamp };
export default firebase.firestore();
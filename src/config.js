import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
let fbObj = {
    apiKey: "AIzaSyAPfFcCfb5MhdrNzTiO5X54u7fs0pwb4qQ",
    authDomain: "resume-builder-13d7b.firebaseapp.com",
    projectId: "resume-builder-13d7b",
    storageBucket: "resume-builder-13d7b.appspot.com",
    messagingSenderId: "108438384703",
    appId: "1:108438384703:web:4826717c8337952b26488a"
    // measurementId: "G-ZRC0XHL2TS"
}
firebase.initializeApp(fbObj);
export default firebase;

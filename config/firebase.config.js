// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMmrIUV0gk5t1oD6AFcrGEPu0hmrimYE0",
    authDomain: "super-forms-aa3c8.firebaseapp.com",
    projectId: "super-forms-aa3c8",
    storageBucket: "super-forms-aa3c8.appspot.com",
    messagingSenderId: "818081165250",
    appId: "1:818081165250:web:7ffc00bd0eb3d4b291305b",
    measurementId: "G-BV1VNKHS5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


module.exports = {
    app
}
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {ref, onUnmounted, computed } from 'vue'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBmLJyb7y2qkwcf7GsDIimQ7rbylQMlius",

  authDomain: "vue-chat-544ec.firebaseapp.com",

  projectId: "vue-chat-544ec",

  storageBucket: "vue-chat-544ec.appspot.com",

  messagingSenderId: "37023028558",

  appId: "1:37023028558:web:61ea044fd32f7d4baafa1f"

};




// Initialize Firebase

const fb = initializeApp(firebaseConfig);
const auth = getAuth(fb);
//composition functions
export function useAuth() {

}

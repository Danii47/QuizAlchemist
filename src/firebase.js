import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyB3nwiV08BwS7IXSu3vR-RWQ-dtrXuZgfY",
    authDomain: "quizalchemist.firebaseapp.com",
    projectId: "quizalchemist",
    storageBucket: "quizalchemist.appspot.com",
    messagingSenderId: "1086275097140",
    appId: "1:1086275097140:web:92f626a01125bb7ad0b061",
    databaseURL: "https://quizalchemist-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCLuIYi-NOjXpf0nCM4FBRarQ6eD0ELVko",
    authDomain: "pbl-cng.firebaseapp.com",
    projectId: "pbl-cng",
    storageBucket: "pbl-cng.firebasestorage.app",
    messagingSenderId: "183616831570",
    appId: "1:183616831570:web:069c915e35cd92b20c5f8b"
};

const app = initializeApp(firebaseConfig);

export { app };

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut} from 'firebase/auth';
import {useEffect, useState} from "react";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLODS_vzDTWEOZK8TkM726m0nG2H6lUNw",
    authDomain: "projectmod-1999.firebaseapp.com",
    projectId: "projectmod-1999",
    storageBucket: "projectmod-1999.appspot.com",
    messagingSenderId: "810355445440",
    appId: "1:810355445440:web:5c267c24203667a49e6725",
    measurementId: "G-R4863M6MH2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const auth = getAuth();

export async function signIn(email, password, name) {
    const {user} = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName: name })
}
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}
export function logout() {
    return signOut(auth)
}
export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState('');
    useEffect(()=> {
        const unsub = onAuthStateChanged(auth, user => {setCurrentUser(user)} );
        return unsub;
    },[])
    return currentUser;
}
















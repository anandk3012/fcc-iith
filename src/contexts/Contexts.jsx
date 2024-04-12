// contexts/Contexts.js

import React, { useContext, useEffect, useState } from 'react';
import { auth , db } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; // Import updateProfile
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    async function signUp(email, password, profileInfo) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Add additional profile information to Firestore
            await setDoc(doc(db, 'profiles', user.uid), profileInfo);
            setCurrentUser(user);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async function updateProfileInfo(profileInfo) {
        try {
            // Update user profile
            await updateProfile(auth.currentUser, {
                displayName: profileInfo.name // Set display name to the user's name
            });

            // Update additional profile information in Firestore
            await setDoc(doc(db, 'profiles', auth.currentUser.uid), profileInfo);
        } catch (error) {
            throw error;
        }
    }

    async function logout() {
        await auth.signOut();
    }

    const value = {
        currentUser,
        signUp,
        updateProfileInfo,
        logout
    };
    console.log("current user : " + currentUser);
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

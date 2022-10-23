import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, updateProfile, sendEmailVerification } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //console.log(user);
    const [loading, setLoading] = useState(true)
    /* const user = { displayName: "hasan" } */

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const googleSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const facebookSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const githubSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUser = (profile) => {

        return updateProfile(auth.currentUser, profile)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            /* setUser(currentUser); */
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, []);



    const value = { user, createUser, logOut, signIn, loading, googleSignIn, facebookSignIn, githubSignIn, updateUser, verifyEmail, setLoading }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currentUser is running', currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return () => unSubscribe()

    }, [])


    const googleLogin =(provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const gitHubLogin =(provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }




    const authInfo = { user, loading, createUser, signIn, logOut, googleLogin, gitHubLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default UserContext;
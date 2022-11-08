import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app);

const UseContext = ({children}) => {
    const[user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

     //create new user
     const createUser =(email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //user singin 
    const userSingIn =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //user log out
    const logOut =() => {
        setLoading(true)
        return signOut(auth)
    }

    //login with google
    const providerLogIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    //sing in with github
    const providerGitHub = provider => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    //tracking user
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser=> {
            setUser(currentUser)
            setLoading(false)
        }))
        return () => {
            unsubscribe()
        }
    },[])

    const authInfo ={
        user,
        createUser,
        userSingIn,
        logOut,
        providerLogIn,
        providerGitHub,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;
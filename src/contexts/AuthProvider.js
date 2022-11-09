import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { app } from '../Firebase/firebase.config';



export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
    

const createUser =(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)

}

const logIn =(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

const googleLogin =()=>{
    setLoading(true);
   return signInWithPopup(auth, googleProvider)
}

const logOut = () => {
    setLoading(true);
    return signOut(auth)
}

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
      
    });
    return () => unSubscribe()

}, [])


  
    const authInfo = { user,createUser,logIn,googleLogin,logOut,loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
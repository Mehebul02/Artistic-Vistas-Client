import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase_config";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user ,setUser] =useState()
    const [loading,setLoading] = useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userSignIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userSignOut =()=>{
        return signOut(auth)
    }
    const signInGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth, (currentUser) => {
        setLoading(false)
            setUser(currentUser)
            console.log('Tui sob somoy thakbi')
          });
          return ()=>{
            unsubscribe()
          }
    },
        [])
  const authInfo = {
    user,
    loading,
    createUser,
    userSignIn,
    userSignOut,
    signInGoogle
  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;

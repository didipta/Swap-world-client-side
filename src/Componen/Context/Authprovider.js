import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import { app } from '../Firbase/Firebase.config';
export const AuthContext=createContext();
const Authprovider = ({children}) => {
    const [theme,setTheme]=useState(false);
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const [userrole,setUserrole]=useState("");
    const auth=getAuth(app);
    const googlelogin=(provider)=>
    {
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
 
    const signoutall=()=>
    {
        setLoading(true);
        signOut(auth)
        .then(res => {
            setUserrole(" ")
            // localStorage.removeItem('Artworld-token');
            setUser(null);
        })
        .catch(error=>{
            setUser(null);
        })
    }
    const createuser=(email,password)=>
    {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const deleteuser=()=>
    {
        return deleteUser(auth.currentUser);
    }
    const siginwithemailpassword=(email,password)=>
    {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const upadateuserprofile=(profile)=>
    {
        return updateProfile(auth.currentUser,profile);
    }
    const forgetpass=(email)=>
    {
        return sendPasswordResetEmail(auth, email);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>
          {
            fetch(`https://swap-world-server-site.vercel.app/user/${currentUser?.email}`)
            .then(res => res.json())
            .then(data => {
              setUserrole(data.role)
            })
            
              setUser(currentUser);
              setLoading(false);
          });
          return ()=>
          {
              unsubscribe();
          }
  
      },[])
      const authInfo={
        user,
        loading,
        theme,
        setTheme,
        googlelogin,
        createuser,
        siginwithemailpassword,
        upadateuserprofile,
        signoutall,
        userrole,setUserrole,
        forgetpass,
        deleteuser
        }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default Authprovider;
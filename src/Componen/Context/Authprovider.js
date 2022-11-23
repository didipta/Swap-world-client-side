import React, { createContext, useState } from 'react';
export const AuthContext=createContext();
const Authprovider = ({children}) => {
    const [theme,setTheme]=useState(false);
    const [user,setUser]=useState(null);
    const authInfo={
        theme,
        setTheme,
        user,
        }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default Authprovider;
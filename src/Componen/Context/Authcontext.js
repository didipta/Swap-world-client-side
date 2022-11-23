import React, { createContext, useState } from 'react';
export const AuthContext=createContext();
const Authcontext = ({children}) => {
    const [theme,setTheme]=useState(false);


    const authInfo={
        theme,
        setTheme,
        }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default Authcontext;
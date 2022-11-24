import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Commonpage/Loading/Loading';

import { AuthContext } from '../Context/Authprovider';
const Privetrouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading)
    {
        return <>
        <Loading></Loading>
        
        </>;
    }
    if(!user)
    {
        return <Navigate to="/Loginpage" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default Privetrouter;
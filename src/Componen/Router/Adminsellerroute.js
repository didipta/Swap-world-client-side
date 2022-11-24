import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Commonpage/Loading/Loading';
import { AuthContext } from '../Context/Authprovider';
import Adminseller from '../Hook/Adminseller';

const Adminsellerroute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = Adminseller(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (isAdmin==="Admin") {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Adminsellerroute;
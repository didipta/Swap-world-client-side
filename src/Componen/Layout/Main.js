import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Commonpage/Footer';
import Navbar from '../Commonpage/Navbar';

const Main = () => {
    return (
        <div>
             <Navbar></Navbar>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Main;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Commonpage/Footer';
import Dashboadnav from './Dashboadnav';

const Dashdoardmain = () => {
    return (
        <div>
         <Dashboadnav></Dashboadnav>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default Dashdoardmain;
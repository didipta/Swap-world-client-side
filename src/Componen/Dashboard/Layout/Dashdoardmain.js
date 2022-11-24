import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../img/logo.jpg';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../../Commonpage/Footer';
const Dashdoardmain = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
            <a className="btn btn-ghost normal-case text-xl">
          <div className="flex justify-items-center items-center gap-2">
            <img src={logo} alt="" class="mask mask-circle w-10" ></img>
            <div>
                <h1 className="text-lg font-semibold text-cyan-600"><span className="text-xl font-bold text-sky-600">S</span>wap-World</h1>
                <p className="text-sm text-slate-400 center">Mobile Resela</p>
            </div>
            </div>
          </a>
          <div className="drawer-content mr-5">
            
            <label htmlFor="my-drawer-2" className="lg:hidden"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></label>
        
        </div> 
            </div>
            <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5">
                    <Outlet></Outlet>
                </div>
        <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 text-base-content  lg:bg-transparent bg-base-100">
            <li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/home">Home</NavLink></li>
            <li><a>Sidebar Item 2</a></li>
            </ul>
        
        </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Dashdoardmain;
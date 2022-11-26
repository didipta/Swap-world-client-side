import React, { useContext, useEffect, useState } from 'react';
import logo from "../../Componen/img/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import Category from '../Hook/Category';
import { useQuery } from '@tanstack/react-query';
const Navbar = () => {
    const {theme, setTheme,user,signoutall, userrole,carditem}=useContext(AuthContext);
  const filtercart=carditem.filter(cart=>cart?.sataus!=="paid");
    let total=0;
    filtercart?.map(x=>
      {
        total+=x?.p_price;
      }
      )
    return (
        <div className="relative z-40">
        <div className="navbar bg-base-100 fixed top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/home">Home</NavLink></li>
              {
               userrole==="Admin"? <li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/Dashboard">Dashboard</NavLink></li>:<></>
            }
            {
              userrole==="Seller"? <li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/SellerDashboard">Dashboard</NavLink></li>:<></>
            }
             {
               user!==null&&<li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/Myorder">My Order</NavLink></li>
            }
            <li><a>Contact Us</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
          <div className="flex justify-center items-center">
            <img src={logo} alt="" class="mask mask-circle w-10" ></img>
            <div>
                <h1 className="text-lg font-semibold text-cyan-600"><span className="lg:text-xl font-bold text-sky-600">S</span>wap-World</h1>
                <p className="text-sm text-slate-400 center">Mobile Resela</p>
            </div>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/home">Home</NavLink></li>
            {
               userrole==="Admin"? <li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/Dashboard">Dashboard</NavLink></li>:<></>
            }
            {
              userrole==="Seller"? <li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/SellerDashboard">Dashboard</NavLink></li>:<></>
            }
             {
               user!==null&&<li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined}to="/Myorder">My Order</NavLink></li>
            }
             
            <li><a>Contact Us</a></li>
          </ul>
        </div>
        <div className="navbar-end lg:mr-5">
  <div className="flex gap-2 justify-center items-center">
    <div className="dropdown dropdown-end">
      <label tabindex="0" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{filtercart?.length}</span>
        </div>
      </label>
      <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg"> Items {filtercart?.length}</span>
          <span class="text-info">Subtotal: {total} </span>
          <div className="card-actions">
            <Link to="/Myorder"><button className="btn btn-outline btn-sm btn-block">View cart</button></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:block hidden">
          {
            user!==null&& <div className="flex justify-center items-center gap-2">

            <div class="avatar online">
            <div class="w-8  rounded-full">
            <img src={user.photoURL} alt="" className=""/>
            </div>
             </div> 
             <div className="font-bold">
              {user.displayName}
             </div>
              </div>
            }
          </div>
  
    <div className="dropdown dropdown-end">
      <label tabindex="0" className="btn btn-ghost btn-circle avatar">
        <FontAwesomeIcon icon={faEllipsisVertical} className="text-xl"></FontAwesomeIcon>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <div className="lg:hidden">
          {
            user!==null&& <div className="flex justify-center items-center gap-2">

            <div class="avatar online">
            <div class="w-8  rounded-full">
            <img src={user.photoURL} alt="" className=""/>
            </div>
             </div> 
             <div className="font-bold">
              {user.displayName}
             </div>
              </div>
            }
          </div>
       
        </li>
      <li>
          <NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/About" className="justify-between">
            About Us
            <span className="badge">New</span>
          </NavLink>
        </li>
        {
          user!==null?<>
           
        <li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/prfile">Settings</NavLink></li>
        <li><Link onClick={signoutall}>Logout</Link></li>
          </>:
          <li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined}to="/Loginpage">Login</NavLink></li>
        }
      
        
        <li>
          <div className="flex justify-between items-center">
            <p>{!theme?"Light Mode":"Dark Mode"}</p>
            <input type="checkbox" class="toggle" onClick={(e)=>setTheme(e.target.checked)} />
          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>
      </div>
      </div>
    );
};

export default Navbar;
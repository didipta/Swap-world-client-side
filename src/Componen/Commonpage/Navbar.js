import React, { useContext } from 'react';
import logo from "../../Componen/img/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import Category from '../Hook/Category';
const Navbar = () => {
    const {theme, setTheme,user,signoutall, userrole}=useContext(AuthContext);
    const catagory=Category();
    
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
              <li tabIndex={0}>
                <a className="justify-between">
                  Category
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul className="bg-base-100 p-1 w-full">
                {
                    catagory.map(c=>
                      <li className="w-auto"><a><img src={c.img} alt="" className="w-8"></img>
                        {c.name}</a></li>
                      )
                  }
                  
                  
                </ul>
              </li>
              {
               userrole==="Admin"|| userrole==="Seller"? <li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/Dashboard">Dashboard</NavLink></li>:<></>
            }
             {
               userrole==="Buyer"&&<li><a>My Order</a></li>
            }
            <li><a>About us</a></li>
            <li><a>Contact Us</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
          <div className="flex justify-items-center items-center gap-2">
            <img src={logo} alt="" class="mask mask-circle w-10" ></img>
            <div>
                <h1 className="text-lg font-semibold text-cyan-600"><span className="text-xl font-bold text-sky-600">S</span>wap-World</h1>
                <p className="text-sm text-slate-400 center">Mobile Resela</p>
            </div>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/home">Home</NavLink></li>
            <li tabIndex={0}>
              <a>
              Category
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="bg-base-100">
                <div className="flex">
                {
                    catagory.map(c=>
                      <li className="w-auto"><a><img src={c.img} alt="" className="w-8"></img>
                        {c.name}</a></li>
                      )
                  }
                </div>
            
              </ul>
            </li>
            {
               userrole==="Admin"|| userrole==="Seller"? <li><NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/Dashboard">Dashboard</NavLink></li>:<></>
            }
             {
               userrole==="Buyer"&&<li><a>My Order</a></li>
            }
             <li><a>About us</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </div>
        <div className="navbar-end lg:mr-5">
  <div className="flex gap-2 justify-center items-center">
    <div className="dropdown dropdown-end">
      <label tabindex="0" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">0</span>
        </div>
      </label>
      <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg"> Items 9</span>
          <span className="text-info">Subtotal:9 </span>
          <div className="card-actions">
            <button className="btn btn-outline btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    {
            user!==null&& <div class="avatar online">
            <div class="w-8  rounded-full">
            <img src={user.photoURL} alt="" className=""/>
            </div>
          </div> 
    }
  
    <div className="dropdown dropdown-end">
      <label tabindex="0" className="btn btn-ghost btn-circle avatar">
        <FontAwesomeIcon icon={faEllipsisVertical} className="text-xl"></FontAwesomeIcon>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
          <NavLink className={({isActive})=>isActive? 'text-cyan-600 font-semibold bg-none outline-none' : undefined} to="/Aboutus" className="justify-between">
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
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Login = () => {
    // const {signinwithpopup}=useContex(AuthContext);
    const { register, handleSubmit } = useForm();
    const[passwordtype,setPassword]=useState(false);
    const onSubmit = data => console.log(data);
    return (
        <div className=" p-5 h-screen flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-2 items-center shadow shadow-slate-200 rounded-xl p-5 w-96 m-auto">
          <h1 className="text-xl font-semibold mb-5">Welcome Back :)</h1>
          <input {...register("Email")} className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter your email"/>
          <div className="flex w-full justify-center items-center">
          <input type={!passwordtype?"password":"text"} {...register("Password")} className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter your Password"/>
          {
            !passwordtype?<FontAwesomeIcon icon={faEye} className="absolute ml-36 cursor-pointer" onClick={()=>setPassword(!passwordtype)}></FontAwesomeIcon>:
            <FontAwesomeIcon icon={faEyeSlash} className="absolute ml-36 cursor-pointer" onClick={()=>setPassword(!passwordtype)}></FontAwesomeIcon>
          }
          
          
          </div>
          
          <small className="mr-48 font-light text-sm">Forget password</small>
          <input type="submit" value="Login" className='btn btn-xsm'/>
          
            <h1>or</h1>
            <p className="text-sm font-semibold text-gray-600">Social media Login</p>
            <div className='flex justify-center gap-5 text-2xl mb-5'>
              <FontAwesomeIcon className="text-pink-500 cursor-pointer"   icon={faGoogle}></FontAwesomeIcon>
              <FontAwesomeIcon className="text-blue-500 cursor-pointer" icon={faFacebook}></FontAwesomeIcon>
            </div>
            <p className="text-sm font-semibold text-gray-600">Need an account?..<Link to="/signup" className="text-blue-500 text-sm">Sign up</Link></p>
        </form>
            </div>
    );
};

export default Login;
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../Hook/Titlehook';
import Smallloading from './Loading/Smallloading';
import { AuthContext } from '../Context/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';
import Forgetpass from './Forgetpass';
import toast from 'react-hot-toast';
const Login = () => {
    useTitle("Login page");
    const { googlelogin,siginwithemailpassword,setUserrole,deleteuser}=useContext(AuthContext);
    const { register,formState: { errors }, handleSubmit } = useForm();
    const [loading,setloading]=useState(false);
    const[passwordtype,setPassword]=useState(false);
    const [error,setError]=useState("");
    const googleprovider=new GoogleAuthProvider();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const navigator=useNavigate();
    const onSubmit = data =>
    {
      setloading(true);
      siginwithemailpassword(data.Email,data.Password)
      .then(res=>
          {
              const user = res.user;
            fetch(`https://swap-world-server-site.vercel.app/user/${data.Email}`)
            .then(res => res.json())
            .then(data => {
              setloading(false);
              navigator(from,{replace:true});
             })
              .catch(error=>{
              deleteuser()
              .then(() => {

                setError("your account deleted by Admin");
                toast.error("Account already deleted")
                setloading(false);
                  // User deleted.
                }).catch((error) => {
                  // An error ocurred
                  // ...
                });
            })
              // const currentUser = {
              //     email: user.email
              // }

          })
      .catch(e=>
          {
              setError("Please check your email and password");
              setloading(false);
          })
    }

    const handelgooglesignin=()=>
    {
      googlelogin(googleprovider)
      .then(res=>{
        const user=res.user;
        const currentUser = {
          name:user.displayName,
          role:"Buyer",
          phone:"Please set your phone number",
          email: user.email
        }

         fetch("https://swap-world-server-site.vercel.app/user", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data =>{
          navigator(from,{replace:true});
        })
        .catch(e=>
          {
              
          })
    })

      //    fetch('https://server-side-beta.vercel.app/jwt', {
      //       method: 'POST',
      //       headers: {
      //           'content-type': 'application/json'
      //       },
      //       body: JSON.stringify(currentUser)
      //   })
      //       .then(res => res.json())
      //       .then(data => {
               
      //           // local storage to store jwt token
      //           localStorage.setItem('Artworld-token', data.token);
      //           navigator(from,{replace:true});
      //       });
      // })
      // .catch(err=>
      //   {
      //       console.log(err);
      //   })
    }
    return (
        <div className=" p-5 h-screen flex flex-col justify-center items-center">
          
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-2 items-center shadow shadow-slate-200 rounded-xl p-5 w-96 m-auto">
          <h1 className="text-xl font-semibold mb-5">Welcome Back :)</h1>
          <input type="email" {...register("Email", { required: "Email Address is required" })} 
            aria-invalid={errors.Email ? "true" : "false"} 
            className="input input-bordered input-sm w-full max-w-xs" 
            placeholder="Enter your email"
            />

          {errors.Email && <p role="alert" className="text-red-400 text-xs">{errors.Email?.message}</p>}

          <div className="relative flex w-full justify-center items-center">
          <input type={!passwordtype?"password":"text"}
          {...register("Password",{ required: "Password is required",
          minLength: { value: 6, message: "Password must be 6 characters long" },
          pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' } 
        
        })}
           aria-invalid={errors.Password ? "true" : "false"} 
          className="input input-bordered input-sm w-full max-w-xs" placeholder="Enter your Password"/>
          {
            !passwordtype?<FontAwesomeIcon icon={faEye} className="absolute cursor-pointer float-right right-5" onClick={()=>setPassword(!passwordtype)}></FontAwesomeIcon>:
            <FontAwesomeIcon icon={faEyeSlash} className="absolute cursor-pointer float-right right-5" onClick={()=>setPassword(!passwordtype)}></FontAwesomeIcon>
          }
          
          
          </div>
          {errors.Password && <p role="alert" className="text-red-400 text-xs">{errors.Password?.message}</p>}
          <label className="mr-48 font-light text-sm cursor-pointer" htmlFor="forget">Forget password</label>
          {error!==" "&& error!==""?<p className="text-red-400 text-xs">{error}</p>:<></>}
          <button className='btn'> {!loading?"Login":<Smallloading></Smallloading>}</button>
            <h1>or</h1>
            <p className="text-sm font-semibold text-gray-600">Social media Login</p>
            <div className='flex justify-center gap-5 text-2xl mb-5'>
              <FontAwesomeIcon className="text-pink-500 cursor-pointer" onClick={handelgooglesignin}  icon={faGoogle}></FontAwesomeIcon>
              <FontAwesomeIcon className="text-blue-500"   icon={faFacebook}></FontAwesomeIcon>
            </div>
            <p className="text-sm font-semibold text-gray-600">Need an account?..<Link to="/signuppage" className="text-blue-500 text-sm">Sign up</Link></p>
        </form>
        <Forgetpass></Forgetpass>
            </div>
    );
};

export default Login;
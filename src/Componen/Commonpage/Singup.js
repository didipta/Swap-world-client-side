import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEye,faEyeSlash,faCamera} from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../Hook/Titlehook';
import Smallloading from './Loading/Smallloading';

import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Context/Authprovider';
const Singup = () => {
  
  const {createuser,upadateuserprofile,setUserrole}=useContext(AuthContext);
  ///
    useTitle("Registration page")
    const Api=process.env.REACT_APP_imgbb_key;
    const { register,formState: { errors }, handleSubmit } = useForm();
    const[passwordtype,setPassword]=useState(false);
    const [loading,setloading]=useState(false);
    const [imgdata,setImgdata]=useState(' ');
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const navigator=useNavigate();
    const [click,setClick]=useState(false);



    const onSubmit = data => {
        
        const image=data.image[0];
        setloading(true);
        const formdata=new FormData();
        formdata.append('image',image);
         const url=`https://api.imgbb.com/1/upload?key=${Api}`;
         fetch(url,{
          method:"POST",
          body:formdata
         })
         .then(res=>res.json())
         .then(image=>{
          if(image.success){
            createuser(data.Email,data.Password)
         .then(res=>
             {
                 console.log(res)
                 heandelupdateprofile(data.name,image.data.url);
                 heandeluser(data.name,data.phone,data.role,data.Email)
                 toast.success('Successfully Added!')
                 setloading(false)
                 navigator(from,{replace:true});
             })
     .catch(e=>
         {
             toast.error("This didn't work.")
             console.log(e);
         })
          }
         })
         
        
    }
    const heandelupdateprofile=(name,url)=>
    {
        const profile={
            displayName:name,
            photoURL:url,
        }
        upadateuserprofile(profile)
        .then(res=>
            {
                
            })
        .catch(e=>
            {
                
            })
        
    }
    const heandeluser=(name,phone,role,email)=>
    {
      
      const user ={name, email,role,phone};
      fetch("http://localhost:5000/user", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
          setUserrole(role);
        })
        .catch(e=>
          {
              
          })
    }
    const heandleimg=(e)=>{
        setImgdata(e.target.files[0].name);
      
      }
    return (
        <div>
            <div className=" p-5 h-screen flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-2 items-center shadow shadow-slate-200 rounded-xl p-5 w-96 m-auto">
          <h1 className="text-xl font-semibold mb-5">Registration Here :)</h1>
          <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered input-sm w-full max-w-xs"  
                        placeholder="Enter your Name"
                        aria-invalid={errors.role ? "true" : "false"} />
          {errors.name && <p className='text-red-400 text-xs'>{errors.name?.message}</p>}
  
          <input type="text" {...register("phone", {
                            required: "phone numner is Required",
                            minLength: {value:11,message: 'mobile number must be 11 number'},
                            maxLength: {value:11,message: 'mobile number must be 11 number'}
                        })} className="input input-bordered input-sm w-full max-w-xs"  
                        placeholder="Enter your Phone number"
                        aria-invalid={errors.phone ? "true" : "false"}
                        />
          {errors.phone && <p className='text-red-400 text-xs'>{errors.phone?.message}</p>}

          <input type="email" {...register("Email", { required: "Email Address is required" })} 
            aria-invalid={errors.Email ? "true" : "false"} 
            className="input input-bordered input-sm w-full max-w-xs" 
            placeholder="Enter your email"
            />

          {errors.Email && <p role="alert" className="text-red-400 text-xs">{errors.Email?.message}</p>}

          <input type="file" id="img"  className="absolute overflow-hidden h-0 " {...register("image", {
                        required: "profile img is Required"
                    })} accept="image/*"
           onChange={heandleimg}
           aria-invalid={errors.image ? "true" : "false"} />

         <label for="img" className="input input-bordered input-sm w-full max-w-xs" ><FontAwesomeIcon icon={faCamera}>
        </FontAwesomeIcon><span className="ml-3 font-normal text-slate-400">{imgdata!==' '?imgdata:"please select your profile image"}</span></label>

        {errors.image && <p role="alert" className="text-red-400 text-xs">{errors.image?.message}</p>}
          <select {...register("role",{ required: "Role is required" })}
           className="input input-bordered input-sm w-full max-w-xs" 
           aria-invalid={errors.role ? "true" : "false"} >
            <option value="Buyer">Please select your Role</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
        </select>
        {errors.role && <p role="alert" className="text-red-400 text-xs">{errors.role?.message}</p>}
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
          <div className="ml-24 font-light text-xs flex justify-center items-center gap-2"><input type="checkbox"  class="checkbox checkbox-xs" onClick={(e)=>setClick(e.target.checked)}/><div className="w-96">Accept <Link to="condition" className="text-sky-600 text-xs">Terms and condition</Link></div></div>
          <button className='btn'disabled={click?false:true}> {!loading?"Sign up":<Smallloading></Smallloading>}</button>
            <p className="text-sm font-semibold text-gray-600">Already have an account?..Please <Link to="/Loginpage" className="text-blue-500 text-sm">Login</Link></p>
        </form>
            </div>
            <Toaster
            className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
        </div>
    );
};

export default Singup;
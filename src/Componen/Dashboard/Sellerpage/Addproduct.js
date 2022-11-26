import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import {faCamera} from '@fortawesome/free-solid-svg-icons'
import Category from '../../Hook/Category';
import useTitle from '../../Hook/Titlehook';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/Authprovider';
import Adminseller from '../../Hook/Adminseller';
import toast, { Toaster } from 'react-hot-toast';
import Smallloading from '../../Commonpage/Loading/Smallloading';
const Addproduct = () => {
    useTitle("Add product")
    const { user} = useContext(AuthContext);
    const [loading,setloading]=useState(false);
    const Api=process.env.REACT_APP_imgbb_key;
    const [isAdmin, isAdminLoading,userdetails] = Adminseller(user?.email);
    console.log(userdetails);
    useTitle("Add product")
    const catagory=Category();
    const { register, handleSubmit,reset } = useForm();
    // const [startDate, setStartDate] = useState(new Date());
    const [imgdata,setImgdata]=useState(' ');
    const heandleimg=(e)=>{
        setImgdata(e.target.files[0].name);
      
      }
      const onSubmit = data =>
    {
        setloading(true);
        const image=data.image[0];
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
            const product={
                p_name:data.p_name,
                sellmobile:userdetails.phone,
                location:data.location,
                image:image.data.url,
                resela_p:data.resela_p,
                original_p:data.original_p,
                category:data.category,
                condition:data.condition,
                purchase_y:data.purchase_y,
                year_use:data.year_use,
                p_details:data.p_details,
                sellername:userdetails.name,
                selleremail:userdetails.email,
                sellerid:userdetails._id,
                sellerstates:userdetails?.states==="verified"?userdetails.states:"verify",
                postDate:(new Date()).toString()
            }

            productadd(product);
            setloading(false);
            toast.success("product Added");
            reset();
            }})
            .catch(e=>{
                toast.error("product not add");
            })
        
    }

    const productadd=(product)=>
    {
        fetch("https://swap-world-server-site.vercel.app/product", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('swapworldToken')}`
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
    
        })
        .catch(e=>
          {
            toast.error("product not add");
            setloading(false)
          })
    }
   
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Add Product </h1>
            <div className="w-96 max-w-xs m-auto">
                <form className="flex flex-col gap-5 w-full justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Enter the product name" {...register("p_name")} className="input input-bordered input-accent w-full max-w-xs" required />
                <input type="text" placeholder="Enter your mobile number" value={userdetails.phone} {...register("mobile")} className="input input-bordered input-accent w-full max-w-xs" readOnly/>
                <input type="text" placeholder="Enter your location" {...register("location")} className="input input-bordered input-accent w-full max-w-xs" required />
                <input type="file" id="img"  className="absolute overflow-hidden h-0 "accept="image/*" {...register("image")}
                  onChange={heandleimg} required
                  />

                <label for="img" className="input input-bordered input-accent w-full max-w-xs pt-3 overflow-hidden" ><FontAwesomeIcon icon={faCamera}>
                    </FontAwesomeIcon><span className="ml-3 font-normal text-slate-400 w-[200px]">{imgdata!==' '?imgdata:"please select your profile image"}</span></label>
                <div className="flex justify-around items-center gap-4 w-full">
                <input type="text" placeholder="resale price" {...register("resela_p")} className="input input-bordered input-accent w-full max-w-xs" required />
                <input type="text" placeholder="original price" {...register("original_p")} className="input input-bordered input-accent w-full max-w-xs" required />
                
                </div>
                <div className="flex justify-around items-center gap-4 w-full">
                <select className="input input-bordered input-accent w-full max-w-xs" {...register("category")} required>
                    <option value="fair">Category select</option>
                    {
                        catagory.map(c=>
                            <option value={c._id}>{c.name}</option>
                            )
                    }
                </select>
                <select className="input input-bordered input-accent w-full max-w-xs" {...register("condition")} required>
                    <option value="fair">Conditon select</option>
                    <option value="fair">Fair</option>
                    <option value="Good">Good</option>
                    <option value="excellent">Excellent</option>
                </select>
                </div>
                <div className="flex justify-around items-center gap-4 w-full">
                <input type="text" placeholder="Purchase year" {...register("purchase_y")} className="input input-bordered input-accent w-full max-w-xs" required />
                <input type="text" placeholder="Years of use" {...register("year_use")} className="input input-bordered input-accent w-full max-w-xs" required />
                
                </div>
                {/* <DatePicker selected={new Date()} onChange={(date) => setStartDate(date)} className="input input-bordered input-accent w-full max-w-xs" required/> */}
                <textarea type="text" placeholder="Enter the product Details" {...register("p_details")} className="input input-bordered input-accent w-full max-w-xs" required />
                <button className="btn">{!loading?"Submit":<Smallloading></Smallloading>}</button>


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

export default Addproduct;
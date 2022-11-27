import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Smallloading from '../Commonpage/Loading/Smallloading';
import { AuthContext } from '../Context/Authprovider';

const Booknow = ({products}) => {
    const {user}=useContext(AuthContext);
    const [loading,setloading]=useState(false);
    const { register, handleSubmit } = useForm();
    const [selction,setSelection]=useState(false);
    const navigator=useNavigate();
    const onSubmit = data =>
    {
        setloading(true);
        const order={
          p_id:products._id,
          p_name:products.p_name,
          p_img:products.image,
          p_price:+products.resela_p+100,
          user:user.displayName,
          email:user.email,
          location:data.location,
          number:data.number,
          seller:products.selleremail,
          sataus:"Booking"
        }
        orderadd(order);
       
    }
    const orderadd=(order)=>
    {
        fetch("https://swap-world-server-site.vercel.app/order", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            setloading(false)
            toast.success("Booking successful")

            setSelection(true);
        })
        .catch(e=>
          {
            toast.error("Booking error");
            setloading(false)
          })
    }
    return (
        <div>
        <input type="checkbox" id="booknow-modal-3" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="booknow-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Product Book Now!</h3>
           {
            !selction?<form className="flex flex-col justify-center items-center gap-3 pt-5" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Type here" value={products.p_name} className="input input-bordered input-secondary w-full max-w-xs" disabled readOnly/>
            <input type="text" placeholder="Type here"  value={products.resela_p+"-৳ + "+"delevery-100-৳"} className="input input-bordered input-secondary w-full max-w-xs" disabled readOnly />
            <input type="text" placeholder="Type here"  value={user.displayName} className="input input-bordered input-secondary w-full max-w-xs" disabled readOnly/>
            <input type="text" placeholder="Type here"  value={user.email} className="input input-bordered input-secondary w-full max-w-xs" disabled readOnly />
            <input type="text" placeholder="Phone number" {...register("number")} className="input input-bordered input-secondary w-full max-w-xs" required/>
            <input type="text" placeholder="meeting location" {...register("location")} className="input input-bordered input-secondary w-full max-w-xs" required/>
            <button className='btn'> {!loading?"Booking Confirm":<Smallloading></Smallloading>}</button>
            </form>:<div>
            <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Please Payment!</h2>
                <p>Your order is booked.Please payment your Booking order</p>
                <div class="card-actions justify-end">
                <a href="/Myorder"><button class="btn btn-primary">Go Order page</button></a>
                </div>
            </div>
            </div>
            </div>
           }
        </div>
        </div>
        <Toaster
        className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
     
                </div>
    );
};

export default Booknow;
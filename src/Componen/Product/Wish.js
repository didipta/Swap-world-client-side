import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Context/Authprovider';

const Wish = ({products}) => {
    const {user}=useContext(AuthContext);
     const heandelwish=()=>
     {
        const wish={
            product:products,
            productid:products._id,
            email:user.email,
            status:"Wishlist"
          }
          wishadd(wish);
     }
     const wishadd=(wish)=>
    {
       
        fetch("https://swap-world-server-site.vercel.app/productwish", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('swapworldToken')}`
            },
            body: JSON.stringify(wish)
        })
        .then(res => res.json())
        .then(data =>{
            
            toast.success("wish list add successful")
        })
        .catch(e=>
          {
           
            toast.error("Alraedy added wish list");
          })
    }
    return (
        <div>
            <input type="checkbox" id="wish-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box  relative">
            <label for="wish-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="font-bold text-lg">Added Wish List!</h3>
                <p className="py-4">Are you sure this product add the wish list!</p>
                <div className="modal-action">
                <label htmlFor="wish-modal" className="btn" onClick={heandelwish}>Yay!</label>
                </div>
            </div>
            <Toaster
        className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
            </div>
            
     
        </div>
    );
};

export default Wish;
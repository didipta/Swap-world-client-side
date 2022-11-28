import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../Commonpage/Loading/Loading';
import { AuthContext } from '../Context/Authprovider';
import useTitle from '../Hook/Titlehook';
import Booknow from '../Product/Booknow';

const Wishpage = () => {
    const {user}=useContext(AuthContext);
    const [products,SetProduct]=useState({});
    console.log(user.email);
    useTitle("My Wish List")
    const {data: wishlist = [],refetch,isLoading} = useQuery({
        queryKey: ['productwish'],
        queryFn: async() =>{
            const res = await fetch(`https://swap-world-server-site.vercel.app/productwish?email=${user.email}`,
            {
              headers: {
                authorization: `bearer ${localStorage.getItem('swapworldToken')}`
              }
            }
            );
            const data = await res.json();
            return data;
        }
    });
   
    return (
        <>
        {
            wishlist!==0? <div className="pt-20">
            {
            isLoading&&<Loading></Loading>
          }
            <h1 className="text-xl font-semibold mb-5 text-center">My Wish List</h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            No
          </label>
        </th>
        <th>Name</th>
        <th>price</th>
        <th>Seller email</th>
        <th>sataus</th>
      </tr>
    </thead>
    <tbody>
      {
       wishlist.map((wish,i)=>
            <tr key={wish._id}>
            <th>
            <label htmlFor="delete-modal" className="cursor-pointer">
               {i+1}
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
              <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={wish.product?.image} alt="Avatar Tailwind CSS Component" />
              </div>
              </div>
                <div>
                  <div className="font-bold">{wish.product?.p_name}</div>
                </div>
              </div>
            </td>
            <td>
            {wish.product?.resela_p}<br/>
            </td>
            <td>{wish.product?.selleremail}<br/>
            </td>
            <td>
                {wish.status==="Wishlist"?<label htmlFor="booknow-modal-3" className="btn btn-sm bg-teal-500 text-white border-none" onClick={()=>SetProduct(wish.product)}>Book Now</label>:<p className="text-xs font-semibold text-pink-600">{wish.status==="Booking"&&"Already Booked"}</p>}
              
            </td>
          </tr>  
            )
      }
    </tbody>
    
  </table>
  <Booknow
    products={products}
    ></Booknow>
</div>
        </div>:<h1 className="pt-20 p-10 text-xl text-center font-semibold">You have not placed any wish</h1>
        }
        </>
       
    );
};

export default Wishpage;
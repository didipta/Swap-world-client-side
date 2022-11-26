import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import Loading from '../Commonpage/Loading/Loading';
import { AuthContext } from '../Context/Authprovider';
import useTitle from '../Hook/Titlehook';

const Myorderpage = () => {
    const {user}=useContext(AuthContext);
    console.log(user.email);
    useTitle("My Order")
    const {data: allorders = [],refetch,isLoading} = useQuery({
        queryKey: ['ordertall'],
        queryFn: async() =>{
            const res = await fetch(`https://swap-world-server-site.vercel.app/ordertall?email=${user.email}&&type=Buyer`);
            const data = await res.json();
            return data;
        }
    });
   
    return (
        <>
        {
            allorders!==0? <div className="p-10 pt-20">
            {
            isLoading&&<Loading></Loading>
          }
            <h1 className="text-xl font-semibold mb-5">My order</h1>
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
        <th>Location</th>
        <th>Seller email</th>
        <th>mobile number</th>
        <th>sataus</th>
      </tr>
    </thead>
    <tbody>
      {
        allorders.map((orders,i)=>
            <tr key={orders._id}>
            <th>
            <label htmlFor="delete-modal" className="cursor-pointer">
               {i+1}
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
              <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={orders.p_img} alt="Avatar Tailwind CSS Component" />
              </div>
              </div>
                <div>
                  <div className="font-bold">{orders.p_name}</div>
                </div>
              </div>
            </td>
            <td>
            {orders.p_price}<br/>
            </td>
            <td>{orders.location}<br/>
            </td>
            <td>{orders.email}<br/>
            </td>
            <td>{orders.number}<br/>
            </td>
            <td>
                {orders.sataus==="Booking"?<button className="btn btn-xs">Payment</button>:orders.sataus}
              
            </td>
          </tr>  
            )
      }
    </tbody>
    
  </table>
</div>
        </div>:<h1 className="pt-20 p-10 text-xl text-center font-semibold">You have not placed any order</h1>
        }
        </>
       
    );
};

export default Myorderpage;
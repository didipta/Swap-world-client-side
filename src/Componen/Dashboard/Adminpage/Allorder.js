import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../Commonpage/Loading/Loading';
import { AuthContext } from '../../Context/Authprovider';
import useTitle from '../../Hook/Titlehook';

const Allorder = () => {
    const {user}=useContext(AuthContext);
    useTitle("All orders")
    const {data: allorders = [],refetch,isLoading} = useQuery({
        queryKey: ['ordertall'],
        queryFn: async() =>{
            const res = await fetch(`https://swap-world-server-site.vercel.app/ordertall?email=${user.email}&&type=Admin`,
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
        <div>
             <div>
          {
            isLoading&&<Loading></Loading>
          }
            <h1 className="text-2xl font-bold mb-5">All orders</h1>
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
        <th>transactionId</th>
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
            <td>{orders.seller}<br/>
            </td>
            <td>{orders.number}<br/>
            </td>
            <td>
              {orders?.transactionId}
            </td>
            <td>
               <p className="text-xs text-pink-600 font-semibold">{orders.sataus}</p> 
              
            </td>
          </tr>  
            )
      }
    </tbody>
    
  </table>
</div>
</div>
        </div>
    );
};

export default Allorder;
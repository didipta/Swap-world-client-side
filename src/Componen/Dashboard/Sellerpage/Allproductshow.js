import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useTitle from '../../Hook/Titlehook';

const Allproductshow = () => {
    useTitle("All Product")
    const {data: allproduct = [],refetch} = useQuery({
        queryKey: ['productall'],
        queryFn: async() =>{
            const res = await fetch('https://swap-world-server-site.vercel.app/productall');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">All Product</h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            Delete
          </label>
        </th>
        <th>Name</th>
        <th>price</th>
        <th>Year</th>
        <th>condition</th>
        <th>Details</th>
        <th>post Date</th>
      </tr>
    </thead>
    <tbody>
      {
        allproduct.map(product=>
            <tr key={product._id}>
            <th>
            <label htmlFor="delete-modal" >
               X
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
              <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product.image} alt="Avatar Tailwind CSS Component" />
              </div>
              </div>
                <div>
                  <div className="font-bold">{product.p_name}</div>
                  <div className="text-sm opacity-50">{product.sellername}</div>
                </div>
              </div>
            </td>
            <td>
            resela:{product.resela_p}<br/>
            <span class="badge badge-ghost badge-sm">original:{product.original_p}</span>
            </td>
            <td>purchase:{product.purchase_y}<br/>
            <span class="badge badge-ghost badge-sm">use:{product.year_use} Year</span>
            </td>
            <td>
                {product.condition}
              
            </td>

            <td>
                {product.p_details.slice(0,20)+"..."}
            </td>
            <td>
              {((product.postDate).split(" "))[0] +" "+((product.postDate).split(" "))[1]+" "+((product.postDate).split(" "))[2]+" "+((product.postDate).split(" "))[3]}
            </td>
          </tr>  
            )
      }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Allproductshow;
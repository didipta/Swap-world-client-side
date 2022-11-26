import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../Commonpage/Loading/Loading';
import { AuthContext } from '../../Context/Authprovider';
import useTitle from '../../Hook/Titlehook';
import Deletemodal from '../../Modal/Deletemodal';
import Makeadmin from '../../Modal/Makeadmin';

const Myproduct = () => {
    const {user}=useContext(AuthContext);
    const[userid,SetUserid]=useState("");
    useTitle("My Product")
    const {data: allproduct = [],refetch,isLoading} = useQuery({
        queryKey: ['productall'],
        queryFn: async() =>{
            const res = await fetch(`https://swap-world-server-site.vercel.app/productall?email=${user.email}`);
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
          {
            isLoading&&<Loading></Loading>
          }
            <h1 className="text-2xl font-bold mb-5">My Product</h1>
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
        <th>manage</th>
      </tr>
    </thead>
    <tbody>
      {
        allproduct.map(product=>
            <tr key={product._id}>
            <th>
            <label htmlFor="delete-modal" className="cursor-pointer" onClick={()=>{SetUserid(product._id)}}>
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
              <small>{((product.postDate).split(" "))[0] +","+((product.postDate).split(" "))[1]+" "+((product.postDate).split(" "))[2]+" "+((product.postDate).split(" "))[3]}</small>
            </td>
            <td>
              {
                product?.status==="sold out"?<p>{product?.status}</p>:product?.status==="advertised"?<p className="text-xs font-medium text-teal-500">{product?.status}</p>:<label htmlFor="admin-modal" className="btn btn-xs" onClick={()=>{SetUserid(product._id)}}>advertise</label>
              }
            </td>
          </tr>  
            )
      }
    </tbody>
    
  </table>
</div>
  <Deletemodal
  type={"product"}
  userid={userid} 
  refetch={refetch}
  >

  </Deletemodal>
  <Makeadmin
  type={"product"}
  userid={userid} 
  refetch={refetch}
  >

  </Makeadmin>
        </div>
    );
};

export default Myproduct;
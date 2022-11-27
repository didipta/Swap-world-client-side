import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../Commonpage/Loading/Loading';
import { AuthContext } from '../../Context/Authprovider';
import useTitle from '../../Hook/Titlehook';

const Mybuyer = () => {
    const {user}=useContext(AuthContext);
    useTitle("My Buyer")
    const {data: allorders = [],refetch,isLoading} = useQuery({
        queryKey: ['ordertall'],
        queryFn: async() =>{
            const res = await fetch(`https://swap-world-server-site.vercel.app/ordertall?email=${user.email}&&type=Seller`,
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
    const orders=allorders.filter(x=>x.sataus!=="cancel")
    let mybuyer=[];
    orders.forEach(x=>{
        if(!mybuyer.some(y=>y.email===x.email)){
            let newbuyer={};
            newbuyer.name=x.user;
            newbuyer.email=x.email;
            newbuyer.count=1;
            mybuyer.push(newbuyer);

        }
        else
        {
            let existbuyer=mybuyer.find(y=>y.email===x.email);
            existbuyer.count++;
        }
    })
    console.log(mybuyer);
    return (
        <div>
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
            No
          </label>
        </th>
        <th>Buyer ame</th>
        <th>Buyer Email</th>
       <th>Orber </th>
      </tr>
    </thead>
    <tbody>
      {
        mybuyer.map((p,i)=>
            <tr key={i}>
            <th>
            <label className="cursor-pointer" >
               {i+1}
              </label>
            </th>
             <td>{p.name}</td>
             <td>{p.email}</td>
             <td>{p.count}</td>
              
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

export default Mybuyer;

import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useTitle from '../../Hook/Titlehook';
import Deletemodal from '../../Modal/Deletemodal';
import Makeadmin from '../../Modal/Makeadmin';
import Verifymodal from '../../Modal/Verifymodal';

const Allusershow = () => {
  useTitle("All User")
    const[userid,SetUserid]=useState("");
    const {data: alluser = [],refetch} = useQuery({
        queryKey: ['alluser'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <h1 className="text-xl font-semibold mb-2">ALL User Show</h1>

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
        <th>Phone</th>
        <th>job</th>
        <th>manage</th>
        <th>Verification</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        alluser.map(user=>
            <tr key={user._id}>
            <th>
            <label htmlFor="delete-modal" onClick={()=>{SetUserid(user._id)}}>
               X
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">{user.name}</div>
                  <div className="text-sm opacity-50">{user.email}</div>
                </div>
              </div>
            </td>
            <td>
             {user.phone}
            </td>
            <td>{user.role}</td>
            <th>
                {
                    user.role!=="Admin"&&<label htmlFor="admin-modal" className="btn btn-ghost btn-xs" onClick={()=>{SetUserid(user._id)}}>Make Admin</label>
                }
              
            </th>

            <th>
                {
                    user.role==="Seller"&&<>
                    {
                        user?.states!=="verified"?<label htmlFor="verify-modal" className="btn btn-ghost btn-xs" onClick={()=>{SetUserid(user._id)}}>Verify</label>:<><p className="text-sm text-green-400">{user?.states}</p></>
                    }
                    </>
                }
              
            </th>
          </tr>  
            )
      }
    </tbody>
    
  </table>
</div>

        <Verifymodal
        userid={userid} 
        refetch={refetch}
        ></Verifymodal>

        <Makeadmin
        userid={userid} 
        refetch={refetch}
        >
        </Makeadmin>

        <Deletemodal
         userid={userid} 
         refetch={refetch}
        >
            
        </Deletemodal>
        </div>
    );
};

export default Allusershow;
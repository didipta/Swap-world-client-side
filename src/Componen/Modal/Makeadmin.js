import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Makeadmin = ({userid,refetch}) => {
    const handleverified = () => {
        fetch(`http://localhost:5000/makeadmin/${userid}`, {
            method:"PUT", 
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Admin successful.')
                refetch();
            }
        })
    }
    return (
        <div>
            <div>
<input type="checkbox" id="admin-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Are you sure to make him Admin</h3>
    <div className="modal-action">
      <label  htmlFor="admin-modal" onClick={handleverified} className="btn bg-green-800">Yes</label>
      <label htmlFor="admin-modal" className="btn">No</label>
    </div>
  </div>
</div>
<Toaster
        className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
        </div>
        </div>
    )
};

export default Makeadmin;